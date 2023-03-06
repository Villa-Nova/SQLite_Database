const usersCreate = require("./usersCreate");
const sqliteConnection = require("../../sqlite");

async function migrationsRun() {
  const schemas = [
    usersCreate
  ].join("");

  sqliteConnection()
    .then(db => db.exec(schemas))
    .catch(error => console.error(error));
};

module.exports = migrationsRun;