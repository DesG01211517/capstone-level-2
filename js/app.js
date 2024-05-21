const BASE_URL = "https://financialmodelingprep.com/api/v3/search-name";

//const companyName = event.target["companyName"].value;

function getDetails(event) {
  event.preventDefault();
  //console.log(event.target["companyName"].value);

  const url =
    BASE_URL +
    `?apikey=L04lob0HeqKpJmAotpHEUjTlZYDpuwan&query=${event.target["companyName"].value}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const listElement = document.getElementById("list");
      listElement.textContent = "";

      for (let i = 0; i < data.length; i++) {
        const nameElement = document.createElement("p");
        nameElement.textContent = `Name: ${data[i].name}`;
        listElement.appendChild(nameElement);

        const symbolElement = document.createElement("p");
        symbolElement.textContent = `Symbol: ${data[i].symbol}`;
        listElement.appendChild(symbolElement);

        const currencyElement = document.createElement("p");
        currencyElement.textContent = `Currency: ${data[i].currency}`;
        listElement.appendChild(currencyElement);

        const stockExchangeElement = document.createElement("p");
        stockExchangeElement.textContent = `Stock Exchange Element: ${data[i].stockExchangeElement}`;
        listElement.appendChild(stockExchangeElement);

        const exchangeShortNameElement = document.createElement("p");
        exchangeShortNameElement.textContent = `Exchange Short Name: ${data[i].exchangeShortName}`;
        listElement.appendChild(exchangeShortNameElement);
      }
    });
}
