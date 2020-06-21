/**
 * @author _rotimi
*/

// Test the registration route for creating a user account
const request = require('supertest');
const app = require('../server');
const User = require('../src/models/User');
const signupRoute = '/api';

describe('POST /users', () => {
  it('should create a new user', async() => {
    
    const name = 'Jon-bellion'
    const email = 'iRobot@gmail.com'
    const password = 'beautiful-mind'
    
    const res = await request(app)
        .post(signupRoute)
        .send({
            name, email, password
        })

        expect(res.headers['x-auth']).not.toBeNull();
        expect(res.body._id).not.toBeNull();
        expect(res.body.email).not.toBeNull();
        expect(res.statusCode).toBe(200);

        User.findOne({email}).then((user) => {
            expect(user).not.toBeNull();
            expect(user.password).not.toEqual(password)
            done();
        });      
    });

    it('should reject a user with invalid mail', async() => {

        const name = 'Jon-bellion'
        const email = 'iRobot'
        const password = 'beautiful-mind'

        const res = await request(app)
            .post(signupRoute)
            .send({
                name, email, password
            })
    
        expect(res.statusCode).toEqual(400);
    });

    it('should reject a user with invalid password', async() => {

        const name = 'Jon-bellion'
        const email = 'iRobot@gmail.com'
        const password = ''

        const res = await request(app)
            .post(signupRoute)
            .send({
                name, email, password
            })
    
        expect(res.statusCode).toEqual(400);
    });
});
