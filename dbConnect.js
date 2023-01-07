import  pkg  from "pg";






const client = new pkg.Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'Develop_DB_Copy',
  password: 'Codeft123',
  port: 5432,
})
export const db =  {client}