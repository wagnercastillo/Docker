const { syncDB } = require("../../tasks/sync-db");

describe("Pruebas en el archivo sync-db.js", () => {
  test("Debe retornar 1", () => {
    const times = syncDB();
    console.log("Test 1", times);

    expect(times).toBe(1);
  });
});
