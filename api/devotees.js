import { Redis } from '@upstash/redis';

const KEY = 'devotees_count';
const SEED = 0;
// Redis is the real source of truth; this only covers the gap where a single
// request fails to reach it. Serverless instances get reused across bursts
// of traffic, so this usually holds the last real count during an outage —
// it just doesn't survive a cold start with no prior successful call.
let lastKnownCount = null;

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  try {
    const redis = Redis.fromEnv();
    // INCR on a missing key initializes it to 0 first, so no separate seed call is needed.
    const count = req.method === 'POST' ? await redis.incr(KEY) : await redis.get(KEY);
    lastKnownCount = count ?? lastKnownCount ?? SEED;
    res.status(200).json({ count: lastKnownCount });
  } catch (err) {
    res.status(200).json({ count: lastKnownCount ?? SEED });
  }
}
