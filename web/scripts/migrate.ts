import { readFileSync } from "node:fs";
import { join } from "node:path";
import { Pool } from "pg";

async function main() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.PGSSL === "false" ? false : { rejectUnauthorized: false },
  });

  const schema = readFileSync(join(__dirname, "..", "db", "schema.sql"), "utf-8");
  await pool.query(schema);
  console.log("Esquema aplicado.");

  if (process.argv.includes("--seed")) {
    const seed = readFileSync(join(__dirname, "..", "db", "seed.sql"), "utf-8");
    await pool.query(seed);
    console.log("Seed aplicado.");
  }

  await pool.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
