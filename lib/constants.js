const brand = require('./models/Brand');


const brands = [
    new brand('McDonalds', '#FF0000', 'mcdonalds'),
    new brand('Burger King', '#FF0000', 'burger-king'),
    new brand('KFC', '#FF0000', 'kfc'),
    new brand('Subway', '#FF0000', 'subway'),
    new brand('Pizza Hut', '#FF0000', 'pizza-hut'),
];

module.exports = Object.freeze({
    ALL_BRANDS: brands
});