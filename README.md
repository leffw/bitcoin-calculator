# Bitcoin Calculator
![](./presentation.png)

This is a project for an MVP (Minimum Viable Product) of a value conversion calculator between Bitcoin (BTC) and Brazilian (BRL) and American (USD) currencies.

Demo: https://leffw.github.io/bitcoin-calculator/

## Embedding via iFrame
Embed the calculator on your website, follow the example below:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bitcoin Calculator</title>
    <style>
        body {
            background: rgb(2,0,36);
            background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
        }
        .iframe-container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100vh;
        }
        iframe {
            border: none;
            border-radius: 15px;
            overflow: hidden;
            width: 25%;
            height: 250px;
            box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
            -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
        }
    </style>
</head>
<body>
    <div class="iframe-container">
        <iframe src="https://leffw.github.io/bitcoin-calculator" frameborder="0" scrolling="no"></iframe>
    </div>
</body>
</html>
```

## List of companies using the software.
- https://www.areabitcoin.com.br/calculadora-bitcoin

