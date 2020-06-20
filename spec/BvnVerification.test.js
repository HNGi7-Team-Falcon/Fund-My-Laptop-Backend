/**
 * @author Abdullahi Idris - @Abdullahidris
 * Story title: Integrating tools setup - BVN verification (Test)
 * Ticket Id: #45802
 * URL https://app.clubhouse.io/startng/story/45802/integrating-tools-setup-bvn-verification-test
 */

const BvnVerificationService = require('../src/services/BvnVerification');

test('Return full bvn details of user', done => {
    BvnVerificationService.verifyBVN('123456789', function (response) {
        const JSONresponse = JSON.parse(response);
        expect(JSONresponse).toStrictEqual(mock);
        done();
    })

});

var mock = {
    status: 'success',
    message: 'BVN details fetched',
    data: {
        bvn: '123456789',
        first_name: 'Wendy',
        middle_name: 'Chucky',
        last_name: 'Rhoades',
        date_of_birth: '01-01-1905',
        phone_number: '08012345678',
        registration_date: '01-01-1921',
        enrollment_bank: '044',
        enrollment_branch: 'Idejo',
        image_base_64: null,
        address: null,
        gender: 'Male',
        email: null,
        watch_listed: null,
        nationality: 'Nigerian',
        marital_status: null,
        state_of_residence: null,
        lga_of_residence: null,
        image: null
    }
}  