import User from './User.js';
import Setting from './Setting.js';
import Section from './Section.js';
import Question from './Question.js';
import Response from './Response.js';
import PlannedGift from './PlannedGift.js';
import Ministry from './Ministry.js';
import PDFTemplate from './PDFTemplate.js';

Section.hasMany(Question, { foreignKey: 'sectionId' });
Question.belongsTo(Section, { foreignKey: 'sectionId' });
Response.belongsTo(User, { foreignKey: 'userId' });
Response.belongsTo(Question, { foreignKey: 'questionId' });
PlannedGift.belongsTo(User, { foreignKey: 'userId' });
Ministry.belongsTo(User, { foreignKey: 'userId' });

export {
  User,
  Setting,
  Section,
  Question,
  Response,
  PlannedGift,
  Ministry,
  PDFTemplate
};