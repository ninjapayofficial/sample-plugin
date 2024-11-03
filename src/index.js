// src/index.js
import moment from 'moment';

export function init(app) {
  app.get('/current-time', (req, res) => {
    const now = moment().format('LLLL');
    res.send(`Current time is: ${now}`);
  });
}
