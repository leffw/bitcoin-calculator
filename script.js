let price_brl;
let price_usd;

async function fetchData() {
  try {
    const responseBRL = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCBRL');
    const responseUSD = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
    const dataBRL = await responseBRL.json();
    const dataUSD = await responseUSD.json();
    price_brl = dataBRL.price;
    price_usd = dataUSD.price;
  } catch (err) {
    price_brl = 0;
    price_usd = 0;
  }
}

fetchData();

function convertSatsToBTC() {
  var value_from = document.getElementById("value-from").value;
  var unit_from = document.getElementById("menu-dropdown-from").value;
  var unit_to = document.getElementById("menu-dropdown-to").value;

  if (unit_from === "sats" && unit_to === "btc") {
    document.getElementById("value-to").value = parseFloat(value_from / Math.pow(10, 8)).toFixed(8);
  }
}

function convertBTCToSats() {
  var value_from = document.getElementById("value-from").value;
  var unit_from = document.getElementById("menu-dropdown-from").value;
  var value_to = document.getElementById("value-to").value;
  var unit_to = document.getElementById("menu-dropdown-to").value;
  
  console.log(unit_from, unit_to)
  if (unit_from === "btc" && unit_to === "sats") {
    document.getElementById("value-to").value = parseFloat(value_from * Math.pow(10, 8)).toFixed(0);
  }
  if (unit_from === "sats" && unit_to === "btc") {
    document.getElementById("value-from").value = parseFloat(value_to * Math.pow(10, 8)).toFixed(0);
  }
}

function convertFromTo() {
  var value_from = document.getElementById("value-from").value;    
  var unit_from = document.getElementById("menu-dropdown-from").value;
  var unit_to = document.getElementById("menu-dropdown-to").value;
  if (unit_from === "sats") {
      value_from = value_from / Math.pow(10, 8)
  };

  if (unit_to === "brl") {
    document.getElementById("value-to").value = parseFloat(
      value_from * parseFloat(price_brl)).toFixed(2)
  } else if (unit_to === "usd") {
    document.getElementById("value-to").value = parseFloat(
        value_from * parseFloat(price_usd)).toFixed(2)
  };
};

function convertToFrom() {
  var unit_from = document.getElementById("menu-dropdown-from").value;
  var value_to = document.getElementById("value-to").value;    
  var unit_to = document.getElementById("menu-dropdown-to").value;

  if (unit_to === "brl") {
      if (unit_from == "btc") {
          document.getElementById("value-from").value = parseFloat(
              value_to / parseFloat(price_brl)).toFixed(8)
      } else if (unit_from == "sats") {
          document.getElementById("value-from").value = parseFloat(
              (value_to / parseFloat(price_brl)) * Math.pow(10, 8)).toFixed(0)  
      };
  } else if (unit_to === "usd") {
      if (unit_from == "btc") {
          document.getElementById("value-from").value = parseFloat(
              value_to / parseFloat(price_usd)).toFixed(8)
      } else if (unit_from == "sats") {
          document.getElementById("value-from").value = parseFloat(
              (value_to / parseFloat(price_usd)) * Math.pow(10, 8)).toFixed(0)  
      }
  };
};
document.getElementById("value-from").addEventListener(
  "input", () => {
    convertFromTo();
    convertSatsToBTC();
  }
);

document.getElementById("menu-dropdown-from").addEventListener(
  "change", () => {
    convertFromTo();
    convertSatsToBTC();
  }
);

document.getElementById("value-to").addEventListener(
  "input", () => {
    convertToFrom();
    convertBTCToSats();
  }
);

document.getElementById("menu-dropdown-to").addEventListener(
  "change", () => {
    convertToFrom();
    convertBTCToSats();
  }
);