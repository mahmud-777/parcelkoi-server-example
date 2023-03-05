import app from "./app";
import { connectWithDb, uri } from "./mongo";
import { errorLogger, infoLogger } from "./logger";

const PORT = 3001;

app.listen(PORT, () => {
  connectWithDb();

  if (process.env.ENVIRONMENT != "TEST") app.use(errorLogger(uri));

  console.log(`app is running on port ${PORT}`);
});
