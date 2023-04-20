import 'dotenv/config';
import { server } from './server/Server';

const port = process.env.SERVER_PORT || 3333;

server.listen(port, () =>
  console.log(`Server start to ${process.env.BASE_URL}:${port}`)
);
