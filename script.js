    var ourData;
    var ourRequest;

    document.addEventListener('DOMContentLoaded', function (){

        ourRequest = new XMLHttpRequest(),
        method = "GET",
        url = "https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=boolean";

    ourRequest.open(method, url, true);
    ourRequest.onreadystatechange = function() {
        if (ourRequest.readyState == 4 && ourRequest.status == 200 ) {
            ourData = ourRequest.response.results;
            console.log(ourData[1].question);

            
          }
          
      };  
        ourRequest.responseType = 'json';
        ourRequest.send();
        
        
    });

    

    function printQuestions () {
        var index = -1;
        document.querySelector("#questionOutput").innerHTML = (ourData[++index].question || ourData[index=0].question);
        }
        printQuestions();
    

    
        

    

    




// var currentQuestion = 0;
// var questionOutput = document.getElementById("question");
// var category = document.getElementById("category");
// var difficulty = document.getElementById("difficulty");
// var correctAnswer = ourData[currentQuestion].correct_answer;
// var wrongAnswer = ourData[currentQuestion].incorrect_answers;
// var question = ourData[i].question;



//     function countScore () {
//         var trueOption = document.getElementById("trueOption").value;
//         var falseOption = document.getElementById("falseOption").value;
//         var score = 0;
    
//     if (trueOption == ourData[index].correct_answer) {
//         score++;
//         printQuestions();
//    } else {
//     printQuestions();
//    }
//    if (trueOption == ourData[1].correct_answer) {
//         score++;
//         printQuestions();
//    }
//    console.log(score);
// }





