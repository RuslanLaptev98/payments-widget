import type { NextApiRequest, NextApiResponse } from 'next';
import Redis from 'ioredis';
import { v4 as uuidv4 } from 'uuid';
import FormObject from '../../types/FormObject';

const redisClient = new Redis('localhost');

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  if (req.method === 'POST') {
    const form: FormObject = req.body.form;
    const requestId = uuidv4();
    const entry = { RequestId: requestId, ...form };

    redisClient.lpush('payments', JSON.stringify(entry));

    res.status(201).json({ RequestId: requestId, Amount: form.Amount });
  }
};

export default handler;
