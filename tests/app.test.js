
const test = require("node:test");
const assert = require("node:assert");
const app = require("../app");

const server = app.listen(0);

test("Homepage returns employee information", async () => {
  const response = await fetch(
    `http://localhost:${server.address().port}/`
  );

  assert.strictEqual(response.status, 200);

  const data = await response.json();

  assert.strictEqual(
    data.message,
    "Welcome to Employee Management System"
  );
});

test("Employee endpoint returns employee list", async () => {
  const response = await fetch(
    `http://localhost:${server.address().port}/employees`
  );

  assert.strictEqual(response.status, 200);

  const data = await response.json();

  assert.strictEqual(data.length, 3);
});

test("Health endpoint returns healthy status", async () => {
  const response = await fetch(
    `http://localhost:${server.address().port}/health`
  );

  assert.strictEqual(response.status, 200);

  const data = await response.json();

  assert.strictEqual(data.status, "healthy");
});

test("Close test server", () => {
  server.close();
});
