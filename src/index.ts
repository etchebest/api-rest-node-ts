import 'dotenv/config';
import { server } from './server/Server';

server.listen(process.env.SERVER_PORT, () =>
  console.log(
    `Server start to ${process.env.BASE_URL}:${process.env.SERVER_PORT}`
  )
);
