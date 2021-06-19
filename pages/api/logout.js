import cookie from 'cookie';

export default async function (req, res) {
  if (req.method === 'POST') {
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('token', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        maxAge: 60 * 60 * 24 * 7,
        sameSite: 'strict',
        path: '/',
      })
    );

    res.status(200);
    res.json({ message: 'Success!' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.staus(405).json({
      message: `Method ${req.method} not allowed`,
    });
  }
}
