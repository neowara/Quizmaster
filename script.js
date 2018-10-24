
var index = 0;
var ourData;
var i = 0;
var currentQuestion = 0;

// var correctAnswer = ourData[currentQuestion].correct_answer;
// var wrongAnswer = ourData[currentQuestion].incorrect_answers;
// var question = ourData[i].question;


    document.addEventListener('DOMContentLoaded', function (){
    var questionOutput = document.getElementById("question");
    var category = document.getElementById("category");
    var difficulty = document.getElementById("difficulty");

    var ourRequest = new XMLHttpRequest();
    ourRequest.onreadystatechange = function() {
        // Har begäran kommit fram och fått svar?
        if (ourRequest.readyState == 4) {
          if (ourRequest.status == 200) {
            ourData = ourRequest.response.results;
            // printQuestions(ourData);
            // var totalQuestions = ourData;
            document.querySelector("#questionOutput").innerHTML = ourData[0].question;
            // console.log(question);


                ourData.forEach(function (){
            });
          }
        }
      };
      ourRequest.open('GET', 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=boolean');
      ourRequest.responseType = 'json';
      ourRequest.send();
    });

    


    function printQuestions () {
        var q = 0;
        document.querySelector("#questionOutput").innerHTML = (ourData[++index].question || ourData[index=0].question);

    }

    function countScore () {
        var trueOption = document.getElementById("trueOption").value;
        var falseOption = document.getElementById("falseOption").value;
        var score = 0;
    
    if (trueOption == ourData[index].correct_answer) {
        score++;
        printQuestions();
   } else {
    printQuestions();
   }
   if (trueOption == ourData[1].correct_answer) {
        score++;
        printQuestions();
   }
   console.log(score);
}





