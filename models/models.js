const { Model, DataTypes, Sequelize } = require('sequelize')
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "temp.db" //this is the temp.db file
})


class User extends Model {}

User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
}, { sequelize });

console.log(User===sequelize.models.User);

class Tweet extends Model {}

Tweet.init({
    content: DataTypes.STRING,
    timeCreated: DataTypes.DATE
}, { sequelize });


console.log(Tweet===sequelize.models.Tweet);
User.hasMany(Tweet);
Tweet.belongsTo(User);

// ​(
   ( async(

) => {
    await sequelize.sync({force:true})
})()

module.exports = { User, Tweet }
    // module.exports = Tweet