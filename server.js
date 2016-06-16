import clientServer from './clientServer';
import apiServer from './backendServer';

const PORT = process.env.PORT || 8080;
const PROD = process.env.NODE_ENV === "production";

if (PROD) {
  apiServer(PORT);
} else {
  apiServer(PORT - 1);
  clientServer(PORT);
}
