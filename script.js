function convertFromTo() {
  var value_from = document.getElementById("value-from").value;    
  var unit_from = document.getElementById("menu-dropdown-from").value;
  var unit_to = document.getElementById("menu-dropdown-to").value;
  if (unit_from === "sats") {
      value_from = value_from / Math.pow(10, 8)
  };

  if (unit_to === "brl") {
      fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCBRL')
      .then(response => response.json())
      .then(data => {
          document.getElementById("value-to").value = parseFloat(
              value_from * parseFloat(data.price)).toFixed(2)
      });
  } else if (unit_to === "usd") {
      fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT')
      .then(response => response.json())
      .then(data => {
          document.getElementById("value-to").value = parseFloat(
              value_from * parseFloat(data.price)).toFixed(2)
      });
  };
};

function convertToFrom() {
  var unit_from = document.getElementById("menu-dropdown-from").value;
  var value_to = document.getElementById("value-to").value;    
  var unit_to = document.getElementById("menu-dropdown-to").value;

  if (unit_to === "brl") {
      fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCBRL')
      .then(response => response.json())
      .then(data => {
          if (unit_from == "btc") {
              document.getElementById("value-from").value = parseFloat(
                  value_to / parseFloat(data.price)).toFixed(8)
          } else if (unit_from == "sats") {
              document.getElementById("value-from").value = parseFloat(
                  (value_to / parseFloat(data.price)) * Math.pow(10, 8)).toFixed(0)  
          };
      });
  } else if (unit_to === "usd") {
      fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT')
      .then(response => response.json())
      .then(data => {
          if (unit_from == "btc") {
              document.getElementById("value-from").value = parseFloat(
                  value_to / parseFloat(data.price)).toFixed(8)
          } else if (unit_from == "sats") {
              document.getElementById("value-from").value = parseFloat(
                  (value_to / parseFloat(data.price)) * Math.pow(10, 8)).toFixed(0)  
          }
      });
  };
};

document.getElementById("value-from").addEventListener(
  "change", () => convertFromTo());

document.getElementById("menu-dropdown-from").addEventListener(
  "change", () => convertFromTo());

document.getElementById("value-to").addEventListener(
  "input", () => convertToFrom());

document.getElementById("menu-dropdown-to").addEventListener(
  "change", () => convertToFrom());
