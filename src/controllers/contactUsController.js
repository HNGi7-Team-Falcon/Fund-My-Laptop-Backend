const response = require("./../utils/response");
const CustomError = require("../utils/CustomError");
const Contact = require("../models/Contact");

class ContactUsController {
    async contact(req, res) {
        let {name, email, subject, content} = req.body;

        if(!name, !email, !subject, !content) {
            throw new CustomError("Incomplete data send", 400);
        }

        const contactData = new Contact({name, email, subject, content});

         await contactData.save();

         res.status(201).send(response("Data saved successfully", null));
    }
};

module.exports = new ContactUsController();