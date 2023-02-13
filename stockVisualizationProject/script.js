function getAlphaVantageData() {
  const apiKey = "4KZC8P40DDD30XLI";
  const baseUrl = `https://www.alphavantage.co/query?function=`;
  const functions = ["TIME_SERIES_DAILY", "GLOBAL_QUOTE"];
  const dataLinks = {};

  const promises = functions.map((func) => {
    const url = `${baseUrl}${func}&symbol=IBM&apikey=${apiKey}`;
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dataLinks[func] = url;
        return data;
      })
      .catch((error) => console.log(`Error retrieving ${func} data: ${error}`));
  });

  return Promise.all(promises).then((data) => ({
    timeSeriesDaily: data[0],
    globalQuote: data[1],
  }));
}

function createButtons(dataLinks) {
  const buttonsContainer = document.getElementById("buttons-container");
  const functions = Object.keys(dataLinks);

  functions.forEach((func) => {
    const button = document.createElement("button");
    button.textContent = func;
    button.addEventListener("click", async () => {
      console.log(`Button for ${func} clicked`);

      const response = await fetch(dataLinks[func]);
      const data = await response.json();

      console.log(data);
    });
    buttonsContainer.appendChild(button);
  });
}

class TimeSeriesDaily {
  constructor(date, open, high, low, close, volume) {
    this.date = date;
    this.open = open;
    this.high = high;
    this.low = low;
    this.close = close;
    this.volume = volume;
  }
}

class GlobalQuote {
  constructor(
    symbol,
    open,
    high,
    low,
    price,
    volume,
    latestTradingDay,
    previousClose,
    change,
    changePercent
  ) {
    this.symbol = symbol;
    this.open = open;
    this.high = high;
    this.low = low;
    this.price = price;
    this.volume = volume;
    this.latestTradingDay = latestTradingDay;
    this.previousClose = previousClose;
    this.change = change;
    this.changePercent = changePercent;
  }
}

async function init() {
  const dataLinks = await getAlphaVantageData();
  createButtons(dataLinks);

  const timeSeriesDailyData = dataLinks.timeSeriesDaily["Time Series (Daily)"];
  const timeSeriesDailyObjects = Object.keys(timeSeriesDailyData).map(
    (date) => {
      const {
        "1. open": open,
        "2. high": high,
        "3. low": low,
        "4. close": close,
        "5. volume": volume,
      } = timeSeriesDailyData[date];
      return new TimeSeriesDaily(date, open, high, low, close, volume);
    }
  );

  const globalQuoteData = dataLinks.globalQuote;
  const globalQuote = new GlobalQuote(
    globalQuoteData["01. symbol"],
    globalQuoteData["02. open"],
    globalQuoteData["03. high"],
    globalQuoteData["04. low"],
    globalQuoteData["05. price"],
    globalQuoteData["06. volume"],
    globalQuoteData["07. latest trading day"],
    globalQuoteData["08. previous close"],
    globalQuoteData["09. change"],
    globalQuoteData["10. change percent"]
  );

  console.log(timeSeriesDailyObjects);
  console.log(globalQuote);
}

init();

// Step m: Add search functionality
function searchTable() {
  const table = document.getElementById("stocks-table");
  const input = document.getElementById("search-input").value.toLowerCase();
  const rows = table.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const cells = row.getElementsByTagName("td");
    let shouldHide = true;
    for (let j = 0; j < cells.length - 1; j++) {
      const cell = cells[j];
      if (cell.innerHTML.toLowerCase().indexOf(input) > -1) {
        shouldHide = false;
        break;
      }
    }
    row.style.display = shouldHide ? "none" : "";
  }
}

// Step n: Add sorting functionality
let sortAscending = true;
let sortColumn = 0;

function sortTable(column) {
  const table = document.getElementById("stocks-table");
  const rows = Array.from(table.rows).slice(1);

  rows.sort((a, b) => {
    const aValue = a.cells[column].textContent.trim();
    const bValue = b.cells[column].textContent.trim();
    if (aValue === bValue) return 0;
    if (sortAscending) {
      return aValue < bValue ? -1 : 1;
    } else {
      return aValue > bValue ? -1 : 1;
    }
  });

  while (table.rows.length > 1) {
    table.deleteRow(table.rows.length - 1);
  }

  rows.forEach((row) => {
    table.appendChild(row);
  });

  sortColumn = column;
  sortAscending = !sortAscending;
}

// Step o: Add pagination
let itemsPerPage = 10;
let currentPage = 1;

function showPage(pageNumber) {
  const table = document.getElementById("stocks-table");
  const rows = table.getElementsByTagName("tr");

  const startIndex = (pageNumber - 1) * itemsPerPage + 1;
  const endIndex = startIndex + itemsPerPage;

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    if (i >= startIndex && i < endIndex) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
}

function updatePaginationButtons() {
  const table = document.getElementById("stocks-table");
  const rows = table.getElementsByTagName("tr");
  const totalPages = Math.ceil((rows.length - 1) / itemsPerPage);

  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const pageInput = document.getElementById("page-input");

  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
  pageInput.value = currentPage;
  pageInput.setAttribute("max", totalPages);
}

function goToPage() {
  const pageInput = document.getElementById("page-input");
  const pageNumber = parseInt(pageInput.value);
  if (pageNumber >= 1 && pageNumber <= parseInt(pageInput.max)) {
    currentPage = pageNumber;
    showPage(currentPage);
    updatePaginationButtons();
  }
}

function changeItemsPerPage() {
  const itemsPerPageSelect = document.getElementById("items-per-page-select");
  itemsPerPage = parseInt(itemsPerPageSelect.value);
  currentPage = 1;
  showPage(currentPage);
  updatePaginationButtons();
}
