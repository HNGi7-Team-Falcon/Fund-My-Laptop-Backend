/**
 * DON'T TOUCH THIS FILE - IT'S MY TASK
 * @author Jezeh Priesten @TjeY
 * Story title: TEST:  Delete Recommendation
 * Ticket Id: #45826
 * URL: https://app.clubhouse.io/startng/story/45826/test-delete-recommendation
 */

const server = require("supertest");
const app = require("../server");
const dbHandler = require("./db-handler");

const recommendationRoute = "/api/vouch/";
const signUpRoute = "/api/users/";
const signInRoute = "/api/users/login";

let id;

beforeAll(async () => {
  // spin database
  await dbHandler.connect();

  // Sign me up
  const {
    body: {
      data: { token },
    },
  } = await server(app).post(signUpRoute).send(mockUser);

  // Create a new recommentdation
  const res = await server(app)
    .post(recommendationRoute)
    .send(mockRequest)
    .set("Authorization", "Bearer " + token);
  id = res.body._id;
});

afterAll(async () => {
  // destroy database
  await dbHandler.closeDatabase();
});

describe("DELETE /api/vouch/:id", () => {
  it("should delete authenticated recommendations", async () => {
    const signInResposne = await server(app).post(signInRoute).send(mockUser);
    const {
      data: { token },
    } = signInResposne.body; // get our authentication token
    const res = await server(app)
      .delete(recommendationRoute + id)
      .send(mockRequest)
      .set("Authorization", "Bearer " + token);

    expect(res.statusCode).toEqual(200);
  });

  it("should reject unauthenticated request", async () => {
    const res = await server(app).post(recommendationRoute).send(mockRequest);
    expect(res.statusCode).toEqual(400);
  });
});

const mockUser = {
  name: "Jezeh Priesten",
  email: "recommend@nation.com",
  password: "hardworkPays.225",
  number: "1234567890",
  address: "House",
  verified: true,
};

const mockRequest = {
  content:
    "Jezeh Priesten is very had working software developer and needs this a laptop",
  verificationTag: "https://fundMyLaptop/jpriesten",
  requesterID: "Bfew324242313",
};
