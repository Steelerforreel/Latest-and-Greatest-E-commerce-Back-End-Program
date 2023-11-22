// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// // Products belongsTo Category
// Product.belongsToMany(Category, {
//   through: {
//     model: Tag,
//     unique: false
//   },
//   as: 'product'
// });
// // Categories have many Products
// Category.hasMany(Product, {
//   foreignKey: 'category',
//   onDelete: 'CASCADE',
// });

// // Products belongToMany Tags (through ProductTag)
// Product.belongsToMany(Tag, {
//   through: {
//     model: ProductTag,
//     unique: true,
//   },
//   as: 'product_tag'
// })
// // Tags belongToMany Products (through ProductTag)
// Tag.belongsToMany(Product, {
//   through: {
//     model: ProductTag,
//     unique: true,
//   },
//   as: 'tag'
// });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
