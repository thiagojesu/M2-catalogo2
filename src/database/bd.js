const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    process.env.DATABSE_URL,

    {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnautorized: false,
            }
    }
});
module.exports = { sequelize };