const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotificationBitcoinInfoSchema = new Schema({
    currentPrice: Number,
    dayVolume: Number,
    intradayHigh:Number,
    marketCap: Number,
    status: String,
    createdAt: Date,
    updatedAt: Date
})


const NotificationBitcoinInfo = mongoose.model('NotificationBitcoinInfo', NotificationBitcoinInfoSchema);

module.exports = {
    NotificationBitcoinInfo
}