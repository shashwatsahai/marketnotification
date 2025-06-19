const { NotificationBitcoinInfo } = require("../db/schema");
const SendMail = require("../services/mailservice");

const Notifications = {
  //Create a notification. Line items may include current price of BTC, market trade volume, intra day high price, market cap
  createAndSendNotif: async function (req, res) {
    try {

    
      // FetchValues
      const notification = new NotificationBitcoinInfo({
        Id: "1",
        currentPrice: 10000,
        dayVolume: 150000,
        intradayHigh: 15000,
        marketCap: 1500000,
        status: "SCHEDULED",
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });

      await notification.save();
      const mailString = `${notification.currentPrice}#${notification.dayVolume}#${notification.marketCap}`;
      await SendMail(mailString);
      NotificationBitcoinInfo.find()
      return res.json({
        currentPrice: 10000,
        dayVolume: 150000,
        intradayHigh: 15000,
        marketCap: 1500000,
      });
    } catch (e) {
      console.error("ERROR::createAndSendNotif::", e);
      throw new Error("ERROR::createAndSendNotif")
    }
  },

  //Send a notification to an email
  sendNotif: function (req, res) {
    res.json({
      name: "sendNotif",
    });
    return;
  },

  //List sent notifications (sent, outstanding, failed etc.)
  getList: function (req, res) {
    res.json({
      name: "getList",
    });
    return;
  },

  //Delete a notification
  deleteNotif: function (req, res) {
    res.json({
      name: "deleteNotif",
    });
    return;
  },
};

module.exports = {
  Notifications,
  default: Notifications,
};
