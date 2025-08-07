import { DataTypes, Model } from 'sequelize';
import sequelize from './sequelize.js';

class PDFTemplate extends Model {}

PDFTemplate.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    filePath: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'PDFTemplate',
    tableName: 'pdf_templates',
    timestamps: true,
  }
);

export default PDFTemplate;