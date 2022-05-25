const CoinAPI = require("../lib/coinAPI");
const colors = require("colors");

const check = {
  async price(cmd) {
    try {
      const api = new CoinAPI();
      const priceData = await api.getCoinData(cmd.coin);
      const formattedResult =
        "The current price of " + priceData.name + " is: $" + priceData.price;
      console.log(formattedResult.green);
    } catch (error) {
      console.log(error.message.red);
    }
  },
};

module.exports = check;
