import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Ramon de Jesus',
    email: 'ramonjesusti@gmail.com',
    password_hash: '12334567',
  });

  return res.json(user);
});

export default routes;
