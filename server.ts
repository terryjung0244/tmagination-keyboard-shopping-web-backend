import express from 'express';

const PORT = 8070;
const app = express();

app.listen(PORT, () => {
  console.log(`Wow! It's connected to ${PORT}`);
});
