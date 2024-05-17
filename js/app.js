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
      console.log(data);
    });
}
