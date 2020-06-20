/**
 * @author Alao Abiodun AbdulRahman
 * Story title: TEST: Update User Route
 * Ticket Id: #45804 
 * URL: https://app.clubhouse.io/startng/story/45804/test-update-user-route
 */

const server = require('supertest');
const app = require('../server');
const dbHandler = require('./db-handler');
const jwt = required('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const User = require('../src/models/User');


const userOneId = new mongoose.Types.ObjectId();
const userOne = {
    _id: userOneId,
    name: 'Alao Abiodun',
    email: 'alao@gmail.com',
    password: 'sdjskjds29292',
    tokens: [{
        token: jwt.sign({ _id: userOne._id }, process.env.JWT_SECRET)
    }]
}

const newUserRoute = '/api/users/';
const signUpRoute = '/api/users/';
const signInRoute = '/api/users/login';

beforeAll(async () => {
    await dbHandler.connect();

    await new User(userOne).save();
});

afterAll(async () => {
    await dbHandler.closeDatabase();
});

describe('Should update valid user fields PUT /api/users/:id', async () => {
    await server(app)
        .put(newUserRoute)
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            name: 'AbdulRahman Ayinde'
        })
        .expect(200);

    const user = await User.findById(userOneId);
    expect(user.name).toEqual('AbdulRahman Ayinde');
});

describe('Should reject unauthenticated user', async () => {
    await server(app)
        .put(newUserRoute)
        .send(userOne)
        .expect(401)
})

describe('Should not update invalid user fields', async () => {
    await server(app)
        .put('/user/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            money_investment: 40
        })
        .expect(400);
})
