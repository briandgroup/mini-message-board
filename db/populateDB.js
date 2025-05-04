const { Client } = require("pg")

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO messages (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');

`;


async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://brianooi:436959@localhost:5432/postgres",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();