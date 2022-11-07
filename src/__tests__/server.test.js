const request = require("supertest");
const app = require("../server");

describe("GET /cards", () => {
  test("status 200", () => {
    return request(app).get("/cards").expect(200);
  });
  test("responds with an object containing all cards", () => {
    return request(app)
      .get("/cards")
      .expect(200)
      .then(({ body }) => {
        expect(JSON.parse(body.cards)).toEqual([
          {
            title: "card 1 title",
            imageUrl: "/front-cover-portrait-1.jpg",
            card_id: "card001",
          },
          {
            title: "card 2 title",
            imageUrl: "/front-cover-portrait-2.jpg",
            card_id: "card002",
          },
          {
            title: "card 3 title",
            imageUrl: "/front-cover-landscape.jpg",
            card_id: "card003",
          },
        ]);
      });
  });
});

// test("returns matching card title", async () => {
//   const response = await request(app).get("/cards/card001");

//   expect(response.status).toBe(200);
//   expect(response.body).toEqual(
//     expect.objectContaining({
//       title: "card 1 title",
//     })
//   );
// });
