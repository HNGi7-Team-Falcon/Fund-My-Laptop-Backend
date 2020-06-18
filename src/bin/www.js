const app = require('../../server');
const databaseConfig = require('../config/db');
require('dotenv').config()
const port = process.env.PORT;


app.listen(port, () => {
  console.log(
    `::: server listening on port ${port}. Open via http://localhost:${port}/`
  );
  databaseConfig();
});