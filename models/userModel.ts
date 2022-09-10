import { DataTypes, Model } from 'sequelize'
import sequelize from '../dbconn/connection'

export default class User extends Model {}

User.init(
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
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fantasy_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cnpj_cpf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    access_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    district: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complement: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pix_key: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    photo_path: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    account_confirmed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    account_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE,
  },
  {
    sequelize,
    tableName: 'users',
  }
)
