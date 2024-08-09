import {describe, test, before, after} from "node:test";
import {equal} from "node:assert/strict";
import Surreal from "surrealdb";

const db = new Surreal();
const {query} = db

describe('Surrealdb', () => {
  before(async () => {
    await db.connect();
    await db.connect({
      database: "test",
      namespace: "main",
      url: "http://127.0.0.1:8000/rpc"
    });
  })

  after(async () => {
    await db.disconnect();
  })

  describe("INSERT", () => {
    test("should insert and return product", async () => {
      console.log(await query(`
          INSERT INTO company {
              name : 'SurrealDB',
              founded: "2021-09-10",
              founders: [person:tobie, person:jaime],
              tags: ['big data', 'database']
              };
      `));
    })
  })
})
