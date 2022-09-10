import { DataTypes, Model } from 'sequelize'
import sequelize from '../dbconn/connection'

export default class CampaignCategory extends Model {}

CampaignCategory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    sequelize,
    tableName: 'category_campaign',
  }
)
