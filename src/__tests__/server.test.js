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

describe("GET /cards/:cardId", () => {
  test("returns matching card title", () => {
    return request(app)
      .get("/cards/card001")
      .expect(200)
      .then(({ body }) => {
        expect(JSON.parse(body.card)).toEqual(
          expect.objectContaining({
            title: "card 1 title",
          })
        );
      });
  });
  test("returns a single card identified by its id", () => {
    return request(app)
      .get("/cards/card003")
      .expect(200)
      .then(({ body }) => {
        expect(JSON.parse(body.card)).toEqual({
          id: "card003",
          title: "card 3 title",
          sizes: ["md", "lg"],
          basePrice: 200,
          pages: [
            {
              title: "Front Cover",
              templateId: "template006",
            },
            {
              title: "Inside Top",
              templateId: "template007",
            },
            {
              title: "Inside Bottom",
              templateId: "template007",
            },
            {
              title: "Back Cover",
              templateId: "template008",
            },
          ],
        });
      });
  });
});

describe("POST /cards", () => {
  test("should allow a user to add a card to the list of overall cards", () => {
    const newCard = {
      title: "example title",
      sizes: ["sm", "md", "gt"],
      basePrice: 200,
      pages: [
        {
          title: "Front Cover",
          templateId: "template001",
        },
        {
          title: "Inside Left",
          templateId: "template002",
        },
        {
          title: "Inside Right",
          templateId: "template003",
        },
        {
          title: "Back Cover",
          templateId: "template004",
        },
      ],
    };
    return request(app)
      .post("/cards")
      .send(newCard)
      .expect(201)
      .then(({ body }) => {
        expect(JSON.parse(body.card)).toEqual(
          expect.objectContaining({
            title: "example title",
            id: "card004",
          })
        );
      });
  });
});
