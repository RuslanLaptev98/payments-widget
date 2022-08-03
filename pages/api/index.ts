import type { NextApiRequest, NextApiResponse } from 'next';
import FormObject from '../../types/FormObject';
import pg from 'pg';

const pool = new pg.Pool({
  connectionString: process.env.DB_URL,
  ssl: { rejectUnauthorized: false },
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const form: FormObject = req.body.form;
    console.log(form);
    const { CardNumber, ExpDate, Cvv, Amount } = form;
    const newPayment = await pool.query(
      'INSERT INTO payments (cardnumber, expdate, cvv, amount) VALUES ($1, $2, $3, $4) RETURNING *',
      [CardNumber, ExpDate, Cvv, Amount]
    );
    res.json(newPayment.rows[0]);
  }
};

export default handler;
