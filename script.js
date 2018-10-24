
var index = -1;
var ourData;

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
            var i = 0;
            var currentQuestion = 0;
            var answers = 0;
            var correctAnswer = ourData[currentQuestion].correct_answer;
            var wrongAnswer = ourData[currentQuestion].incorrect_answers;
            var question = ourData[i].question;

            console.log(question);
            // console.log(htmlString);


                ourData.forEach(function (){

                    
            });

            
          }
        }
      };
      ourRequest.open('GET', 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=boolean');
      ourRequest.responseType = 'json';
      ourRequest.send();
    });

    function randomQuestion () {
        var q = 0;
        document.querySelector("#questionOutput").innerHTML = (ourData[++index].question || ourData[index=0].question);

        }


    


