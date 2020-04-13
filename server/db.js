const Sequelize = require('sequelize')

const db = new Sequelize(
  `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env
    .DB_URL || 'localhost'}/rebood_workshop`,
  {
    define: {
      // The `timestamps` field specify whether or not the `createdAt` and `updatedAt` fields will be created.
      timestamps: false
    }
  }
)

const users = db.define('user', {
  name: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  surname: {
    type: Sequelize.STRING(50),
    allowNull: false
  }
})

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
    db.sync().then(() => {
      console.log('Table structures synced.')
    })
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })

module.exports = users
