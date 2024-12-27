require('dotenv').config();
const express = require('express');
const mailRoutes = require('./routes/mailRoutes');
const cors = requie('cors')

const app = express();
const PORT = 3000;
app.use(express.json()); 
app.use(cors());

app.use('/api', mailRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
