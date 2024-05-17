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
      for (let i = 0; i < data.length; i++) {
        const symbolElement = document.createElement("li");
        symbolElement.textContent = data[i].symbol;
        listElement.appendChild(symbolElement);

        const nameElement = document.createElement("li");
        nameElement.textContent = data[i].name;
        listElement.appendChild(nameElement);

        const currencyElement = document.createElement("li");
        currencyElement.textContent = data[i].currency;
        listElement.appendChild(currencyElement);

        const stockExchangeElement = document.createElement("li");
        stockExchangeElement.textContent = data[i].stockExchangeElement;
        listElement.appendChild(stockExchangeElement);

        const exchangeShortNameElement = document.createElement("li");
        exchangeShortNameElement.textContent = data[i].exchangeShortName;
        listElement.appendChild(exchangeShortNameElement);
      }
      //console.log(data);
    });
}
