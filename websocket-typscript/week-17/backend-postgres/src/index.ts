import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const client = new pg.Client(process.env.POSTGRES_URI);
// const client = new pg.Client({
//   host: process.env.POSTGRES_HOST,
//   user: process.env.POSTGRES_USER,
//   password: process.env.POSTGRES_PASSWORD,
//   port: 5432,
//   database: process.env.POSTGRES_DB,
//   ssl: true,
// });

async function main() {
  await client.connect((err) => {
    if (err) {
      console.error("Error connecting to database:", err);
    } else {
      console.log("Connected to database");
    }
  });

  const response = await client.query("SELECT * FROM users;");
  console.log(response.rows);
}

main();
