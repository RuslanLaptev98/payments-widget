import type { NextApiRequest, NextApiResponse } from 'next';
import Redis from 'ioredis';
import { v4 as uuidv4 } from 'uuid';
import FormObject from '../../types/FormObject';

const url: string = process.env.REDIS_CONNECTION_URL as string;
const redisClient = new Redis(url);

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  if (req.method === 'POST') {
    const form: FormObject = req.body.form;
    const requestId = uuidv4();
    const entry = { RequestId: requestId, ...form };

    redisClient.lpush('payments', JSON.stringify(entry)).then((value) => {
      if (value > 0) {
        res.status(201).json({ RequestId: requestId, Amount: form.Amount });
      }
    });
  }
};

export default handler;
