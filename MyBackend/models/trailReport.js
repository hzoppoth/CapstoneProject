const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database') // Importing the sequelize instance

class TrailReport extends Model {}

TrailReport.init({
  username: {
    type: DataTypes.TEXT, 
    allowNull: false,
  },
  trail_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  condition: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_urgent: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  comments: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'TrailReport',
});

module.exports = TrailReport;
