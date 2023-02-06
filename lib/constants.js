const brand = require('./models/Brand');


const brands = [
    new brand('Netflix', '#E50914', 'netflix'),
    new brand('Amazon', '#FF9900', 'amazon'),
    new brand('Apple', '#555555', 'apple'),
    new brand('Google', '#4285F4', 'google'),
    new brand('Spotify', '#1DB954', 'spotify'),
    new brand('Nintendo', '#E60012', 'nintendo'),
    new brand('Microsoft', '#F25022', 'microsoft'),
    new brand('Facebook', '#4267B2', 'facebook'),
    new brand('Instagram', '#405DE6', 'instagram'),
    new brand('Snapchat', '#FFFC00', 'snapchat'),
    new brand('Twitter', '#1DA1F2', 'twitter'),
    new brand('YouTube', '##FF0000', 'youtube'),
    new brand('Burger King', '#F2A900', 'burgerKing'),
    new brand('SubWay', '#008C15', 'subway'),
    new brand('McDonalds', '#FFC72C', 'mcdonalds'),
    new brand('Starbucks', '#00704A', 'starbucks'),
    new brand('Pepsi', '#004B93', 'pepsi'),
    new brand('Coca Cola', '#F40009', 'cocaCola'),
];

module.exports = Object.freeze({
    ALL_BRANDS: brands
});