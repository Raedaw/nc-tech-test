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
        expect(body.cards).toHaveLength(3);
        body.cards.forEach((card) => {
          expect(card).toEqual(
            expect.objectContaining({
              id: expect.any(String),
              title: expect.any(String),
              sizes: expect.any(Object),
              basePrice: expect.any(Number),
              pages: expect.any(Object),
            })
          );
        });
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
