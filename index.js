var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitButton = document.querySelector("#submit-button");
var outputDiv = document.querySelector("#output");

submitButton.addEventListener("click", calculateStocks);

function calculateStocks() {
    var initialPriceValue = Number(initialPrice.value);
    var stockQuantityValue = Number(stocksQuantity.value);
    var currentPriceValue = Number(currentPrice.value);

    calculateProfitAndLoss(initialPriceValue, stockQuantityValue, currentPriceValue);
}

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (((initial - current) *100)/initial);
        outputDiv.innerText = `Oops! your loss is ${loss} and your loss percent is ${lossPercentage}% `;
        // outputDiv.style.color = "red";
    } else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (((current - initial) *100)/initial);
        outputDiv.innerText = `Hurray! your profit is ${profit} and your profit percent is ${profitPercentage}% `;
        // outputDiv.style.color = "green";
    } else {
        outputDiv.innerText = `No pain No gain and No gain No pain!`;
        // outputDiv.style.color = "blue";
    }
}