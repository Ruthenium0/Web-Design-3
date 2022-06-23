

const Sequelize = require("sequelize");

const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "./db.sqlite3",
});

const Users = require("./model")(sequelize);

// function createTable() {

// }

Users.sync()

module.exports = {
	sequelize: sequelize,
	Users: Users,
};
