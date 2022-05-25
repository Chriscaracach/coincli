const axios = require("axios");

class CoinAPI {
  constructor() {
    this.baseUrl = "https://api.coingecko.com/api/v3/coins/";
  }

  async getCoinData(coinName) {
    try {
      const res = await axios.get(this.baseUrl + coinName);
      let name = res.data.name;
      let price = res.data.market_data.current_price.ars;
      return { name, price };
    } catch (error) {
      handleAPIError(error);
    }
  }
}

const handleAPIError = (error) => {
  if (error.response.status === 404) {
    throw new Error("API not responding");
  }
};

module.exports = CoinAPI;
