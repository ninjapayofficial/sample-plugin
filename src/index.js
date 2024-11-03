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
    // Define a Sequelize model
    const { DataTypes } = require('sequelize');

    const SampleModel = sequelize.define('SampleModel', {
      name: DataTypes.STRING,
      value: DataTypes.INTEGER,
    });

    // Sync the model with the database
    SampleModel.sync();

    // Route to create a new record
    app.post('/plugin-data', async (req, res) => {
      try {
        const data = await SampleModel.create(req.body);
        res.status(201).send(`Data saved successfully! ID: ${data.id}`);
      } catch (error) {
        console.error('Plugin Error:', error);
        res.status(500).send('Error saving data.');
      }
    });

    // //Use validation libraries to ensure incoming data is safe.
    // const Joi = require('joi');

    // const dataSchema = Joi.object({
    //   name: Joi.string().required(),
    //   value: Joi.number().integer().required(),
    // });
    
    // app.post('/plugin-data', async (req, res) => {
    //   const { error, value } = dataSchema.validate(req.body);
    //   if (error) {
    //     return res.status(400).send('Invalid data.');
    //   }
    
    //   try {
    //     const data = await SampleModel.create(value);
    //     res.status(201).send(`Data saved successfully! ID: ${data.id}`);
    //   } catch (error) {
    //     console.error('Plugin Error:', error);
    //     res.status(500).send('Error saving data.');
    //   }
    // });
    

    // Route to retrieve all records
    app.get('/plugin-data', async (req, res) => {
      try {
        const data = await SampleModel.findAll();
        res.json(data);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving data.');
      }
    });
  },
};
