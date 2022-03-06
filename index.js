import express from 'express';
import connectWithDb from './mongo';
import configure from './controllers';

const PORT = 3001;
const app = express();

app.use(express.json());

// const log = (msg) => console.log(msg);
connectWithDb();

configure(app);

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});

