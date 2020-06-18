/**
 * @file Defines the route handlers for the various routes used for making
 *  and verifying payment
 * @author Gabriel <gabrielsonchia@gmail.com> <18/06/2020 2:17pm>
 * @since 1.0.0
 * Last Modified: Gabriel <gabrielsonchia@gmail.com> <18/06/2020 4:10pm>
 */

const axios = require('axios');
const dotenv = require('dotenv');
const response = require('./../utils/response');
const CustomError = require('./../utils/CustomError');
dotenv.config();

//flutterwave encryption and secret key
const key = process.env.FLUTTERWAVE_ENCRYPT_KEY;
const secret_key = process.env.FLUTTERWAVE_SECRET_KEY;

/**
 * 
 * @param {String} key flutterwave encryption key above
 * @param {String} text data send by user for encryption
 * @description the function excrypts the data before it is send to 
 * the flutterwave api below
 * @see {@link https://developer.flutterwave.com/docs/encryption}
 */
function encrypt(key, text) {
    text = JSON.stringify(text);
    var forge = require("node-forge");
    var cipher = forge.cipher.createCipher(
     "3DES-ECB",
     forge.util.createBuffer(key)
    );
    cipher.start({ iv: "" });
    cipher.update(forge.util.createBuffer(text, "utf-8"));
    cipher.finish();
    var encrypted = cipher.output;
    return forge.util.encode64(encrypted.getBytes());
   }

   /**
    * @param {object} req express request object
    * @param {object} res express response object
    * @description makes a request to {@link https://api.flutterwave.com/v3/charges}
    * with the provided card details for debit
    */
exports.card_payment = async (req, res, next) => {
    //checking if data provided is valid
    for(detail in req.body) {      
        if(detail === "authorization"){
            if(detail.pin === null){
                throw new CustomError("Incomplete data provided", 400);
            } 
        }else if(detail === undefined || detail === null) {
            throw new CustomError("Incomplete data provided", 400);
        }
    }
 
    //encrypting user provided card data 
    const encrypted_data = encrypt(key,req.body);

    //making a request to flutterwave api with encrypted text 
    const payment =  await axios({
         method: 'post',
         url: 'https://api.flutterwave.com/v3/charges',
         responseType:'json',
         headers:{
             'content-type': 'application/json',
             'Authorization': `Bearer ${secret_key}`
         },
         params: { type: 'card' },
         data: { client: encrypted_data }
     })

     res.status(200).send(response("Valid Card", {"flw_ref":payment.data.data.flw_ref},"Successful"));

}
    
/**
    * @param {object} req express request object
    * @param {object} res express response object
    * @description makes a request to {@link https://api.flutterwave.com/v3/validate-charge}
    * with OTP provided by user and flow reference code to authenticate user
    */
exports.validate_payment = async (req, res) => {
    //checking if data provided is valid
    for(detail in req.body) {
        if(detail === undefined || detail === null) {
            throw new CustomError("Incomplete data provided", 400);
        }
    }

    let {flw_ref, otp} = req.body;
    otp = parseInt(otp);

     //making a request to flutterwave api with the provided OTP for validation
        const validate_payment = await axios({
            method: 'post',
            url: 'https://api.flutterwave.com/v3/validate-charge',
            responseType:'json',
            headers:{
                'content-type': 'application/json',
                'Authorization': `Bearer ${secret_key}`
            },
            data: { 
                flw_ref, 
                otp
            }
        })

        if(validate_payment.data.data.status === "successful"){
            res.status(200).send(response("Validation successful", {id:validate_payment.data.data.id},"successful"));
        }else{
            throw new CustomError("Invalid credentials provided", 400);
        }

}

 /**
    * @param {object} req express request object
    * @param {object} res express response object
    * @description makes a request to {@link https://api.flutterwave.com/v3/transactions/id/verify}
    * with the transaction id to verify transaction
    */
exports.verify_payment = async (req, res) => {
    
     //checking if data provided is valid
    for(detail in req.body) {
        if(detail === undefined || detail === null) {
            throw new CustomError("Invalid data provided", 400);
        }
    }
        const { id } = req.body;

        //making a request to verify status of payment and details
        const verify_payment = await axios({
            method: 'get',
            url: `https://api.flutterwave.com/v3/transactions/${id}/verify`,
            responseType:'json',
            headers:{
                'content-type': 'application/json',
                'Authorization': `Bearer ${secret_key}`
            },
        })
       
        if(verify_payment.data.data.status === 'successful') {
            res.status(200).send(response("Transaction Successful", {Transaction_id:verify_payment.data.data.id}));
        }else{
            throw new CustomError("Transaction unsuccessful", 400);
        }
}