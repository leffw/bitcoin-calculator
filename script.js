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
    console.log(err);
  }
}

fetchData();

function convertFromTo() {
  const value_from = parseFloat(document.getElementById("value-from").value);
  const unit_from = document.getElementById("menu-dropdown-from").value;
  const unit_to = document.getElementById("menu-dropdown-to").value;

  let convertedValue;

  if (unit_from === "sats") {
    convertedValue = value_from / Math.pow(10, 8);
  } else {
    convertedValue = value_from;
  }

  if (price_brl && price_usd) {
    if (unit_to === "brl") {
      document.getElementById("value-to").value = (convertedValue * parseFloat(price_brl)).toFixed(2);
    } else if (unit_to === "usd") {
      document.getElementById("value-to").value = (convertedValue * parseFloat(price_usd)).toFixed(2);
    }
  }
}

function convertToFrom() {
  const unit_from = document.getElementById("menu-dropdown-from").value;
  const value_from = document.getElementById("value-from").value;
  const unit_to = document.getElementById("menu-dropdown-to").value;

  if (unit_to === "brl") {
    if (unit_from === "btc") {
      document.getElementById("value-to").value = value_from * price_brl
    } else if (unit_from === "sats") {
      document.getElementById("value-to").value = (
        (value_from / Math.pow(10, 8)) * price_brl).toFixed(0);
    }
  } else if (unit_to === "usd") {
    if (unit_from === "btc") {
      document.getElementById("value-to").value = value_from * price_usd
    } else if (unit_from === "sats") {
      document.getElementById("value-to").value = (
        (value_from / Math.pow(10, 8)) * price_usd).toFixed(0);
    }
  }
}

document.getElementById("value-from").addEventListener("input", convertFromTo);
document.getElementById("value-to").addEventListener("input", convertToFrom);
document.getElementById("menu-dropdown-from").addEventListener(
  "change", convertFromTo);
document.getElementById("menu-dropdown-to").addEventListener(
  "change", convertToFrom);
