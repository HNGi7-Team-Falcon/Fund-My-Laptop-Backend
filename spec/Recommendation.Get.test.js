const server = require("supertest");
const app = require("../server");
const dbHandler = require("./db-handler");
const recommendationModel = require("../src/models/Recommendation");

const signUpRoute = "/api/users/";

let user_id;

beforeAll(async () => {
  // spin database
  await dbHandler.connect();

  const {
    body: {
      data: { uid },
    },
  } = await server(app).post(signUpRoute).send(me);
  user_id = uid;
  saveNewRecommendation(user_id);
});

afterAll(async () => {
  // destroy database
  await dbHandler.closeDatabase();
});

describe("PUT /api/request/:id", () => {
  it("should not get any request", async () => {
    const result = await server(app).get(
      "/api/vouch/5eebb3a674b28ab9a8579c6f/all"
    );
    const res = JSON.parse(result.text);
    expect(res.message).toEqual("No Recommendation was found for this user");
    expect(result.statusCode).toBe(404);
    expect(res.success).toBe(false);
  });

  it("should get all requests of a user", async () => {
    const result = await server(app).get(`/api/vouch/${user_id}/all`);
    const res = JSON.parse(result.text);
    expect(result.statusCode).toBe(200);
    expect(res.success).toBe(true);
  });
});

const me = {
  name: "Lord Rahl",
  email: "anti_lengend@seeker.com",
  password: "villainsalsoworkhard",
  address: "fake address",
  number: '10',
  verified: true,
};

function saveNewRecommendation(user_id) {
  const newRecommendation = new recommendationModel({
    content: "new content",
    verificationTag: "link.to.verified.profile",
    requesterID: user_id,
  });
  newRecommendation.save();
}

