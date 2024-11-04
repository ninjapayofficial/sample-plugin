// // src/index.js
// import moment from 'moment';

// export function init(app) {
//   app.get('/current-time', (req, res) => {
//     const now = moment().format('LLLL');
//     res.send(`Current time is: ${now}`);
//   });
// }


// src/index.js
module.exports = {
  init: function (app, sequelize) {
    console.log('Plugin init function called');

    // Define a Sequelize model
    const { DataTypes } = require('sequelize');

    const SampleModel = sequelize.define('SampleModel', {
      name: DataTypes.STRING,
      value: DataTypes.INTEGER,
    });

    // Sync the model with the database
    (async () => {
      try {
        await SampleModel.sync();
        console.log('SampleModel synced with the database');
      } catch (err) {
        console.error('Error syncing SampleModel:', err);
      }
    })();
    
    // SampleModel.sync()
    //   .then(() => {
    //     console.log('SampleModel synced with the database');
    //   })
    //   .catch((err) => {
    //     console.error('Error syncing SampleModel:', err);
    //   });

    // Route to create a new record
    app.post('/sample-plugin/plugin-data', async (req, res) => {
      try {
        const data = await SampleModel.create(req.body);
        res.status(201).send(`Data saved successfully! ID: ${data.id}`);
      } catch (error) {
        console.error('Error in POST /plugin-data:', error);
        res.status(500).send('Error saving data.');
      }
    });

    // Route to retrieve all records
    app.get('/sample-plugin/plugin-data', async (req, res) => {
      try {
        const data = await SampleModel.findAll();
        res.json(data);
      } catch (error) {
        console.error('Error in GET /plugin-data:', error);
        res.status(500).send('Error retrieving data.');
      }
    });
  },
};