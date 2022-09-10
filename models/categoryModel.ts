import { DataTypes, Model } from 'sequelize'
import sequelize from '../dbconn/connection'

export default class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE,
  },
  {
    sequelize,
    tableName: 'categories',
  }
)
