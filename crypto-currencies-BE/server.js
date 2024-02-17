const express = require("express");
const app = express();
const port = 3001;
const fetch = require("node-fetch");
const cors = require("cors");

app.use(cors());

app.get("/coins/markets", async (req, res) => {
  await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd;x_cg_demo_api_key=CG-Fim8B584wwvgUxsPMbDRKa7X;page=${req.query.page};per_page=15`
  )
    .then((res) => res.text())
    .then((body) => {
      res.send(
        JSON.parse(body).map((coin) => {
          return {
            id: coin.id,
            name: coin.name,
            symbol: coin.symbol,
            current_price: coin.current_price,
            low_24h: coin.low_24h,
            high_24h: coin.high_24h,
            price_change_percentage_24h: coin.price_change_percentage_24h,
          };
        })
      );
    });
});

app.get("/coins/:id", async (req, res) => {
  await fetch(
    `https://api.coingecko.com/api/v3/coins/${req.params.id}?x_cg_demo_api_key=CG-Fim8B584wwvgUxsPMbDRKa7X`
  )
    .then((res) => res.text())
    .then((body) => {
      const bodyObj = JSON.parse(body);
      res.send({
        market_data: bodyObj.market_data,
        name: bodyObj.name,
        description: bodyObj.description,
      });
    });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
