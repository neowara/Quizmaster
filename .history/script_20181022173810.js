var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=boolean');
ourRequest.onload = function() {
    var ourData = ourRequest.response;
    console.log(ourData[0]);
};
ourRequest.responseType = 'json';
ourRequest.send();