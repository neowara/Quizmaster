var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=boolean');
ourRequest.onload = function() {
    var ourData = ourRequest.responseType;
    console.log(ourData[1]);
};
ourRequest.responseType = 'json';
ourRequest.send();