import cookie from 'cookie';
import { API_URL } from '@/config/index';

export default async function (req, res) {
  if (req.method === 'POST') {
    const user = req.body;

    const strapiRes = await fetch(`${API_URL}/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: user,
    });

    const data = await strapiRes.json();

    if (strapiRes.ok) {
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('token', data.jwt, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          maxAge: 60 * 60 * 24 * 7,
          sameSite: 'strict',
          path: '/',
        })
      );
      res.status(200);
      res.json({ user: data.user });
    } else {
      res.status(data.statusCode);
      res.json({
        message: data.message[0].messages[0].message,
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.staus(405).json({
      message: `Method ${req.method} not allowed`,
    });
  }
}
