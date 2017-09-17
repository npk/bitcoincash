// A comma separated list of currencies to display.
var ticker_currencies = "USD,BTC,ETH,JPY,CNY"

ticker = function(currencies) {
  $.ajax({
    type: "GET",
    url: "https://min-api.cryptocompare.com/data/price?fsym=BCC&tsyms=" + currencies,
    contentType: "application/json; charset=utf-8",
    timeout: 6000,
    error: function (x, t, m) {
      $('#ticker').html("N/A")
    },
    success: function (currencyRates) {
      var output = "";

      $.each(currencyRates, function (currency, price) {
        output += currency + " - " + price + " ";
      });

      $('#ticker_value').html(output)
    }
  }).done(function () {
    setTimeout(function(){ ticker(ticker_currencies); }, 10000);
  });
}

ticker(ticker_currencies);