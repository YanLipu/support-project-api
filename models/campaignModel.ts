import { DataTypes, Model } from 'sequelize'
import sequelize from '../dbconn/connection'
import User from './userModel'
import Category from './categoryModel'
import CampaignCategory from './campaignCategoryModel'

export default class Campaign extends Model {}

Campaign.init(
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
    goal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount_raised: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    monthly_cost: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    sponsors: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photos_path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    videos_path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE,
  },
  {
    sequelize,
    tableName: 'campaign',
  }
)

Campaign.belongsTo(User, {
  constraints: true,
  foreignKey: 'id_user',
})

User.hasMany(Campaign)

Campaign.belongsToMany(Category, {
  through: {
    model: CampaignCategory,
  },
  foreignKey: 'id_campaign',
  constraints: true,
})

Category.belongsToMany(Campaign, {
  through: {
    model: CampaignCategory,
  },
  foreignKey: 'id_category',
  constraints: true,
})
