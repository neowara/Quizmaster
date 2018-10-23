

var ourData;

// var ourRequest = new XMLHttpRequest();
// ourRequest.open('GET', 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=boolean');
// ourRequest.onload = function() {
//     var ourData = ourRequest.response.results;
//     printQuestions(ourData);

//     console.log(ourData[0].question);
// };
// ourRequest.responseType = 'json';
// ourRequest.send();

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

    // window.onload = function(){ 
    //     document.getElementById("btn").onclick = function() {
    //         var htmlString = "";
    //         var i = 0;
    //         var question = ourData[0].question;
    //         if( i < question[i]) {
    //             htmlString += question[i++] + "<br>";
    //         }
          
    //         document.getElementById("difficulty").innerHtml = htmlString;
    //         console.log(question);
    //     };
    // };

                

    function doSomething () {
        var q = 0;
        var x = "";

        var resultsData = ourData[0].question;
        if (q < resultsData.length) {
            x += resultsData + "<br>";
   
        }
        document.getElementById("questionOutput").innerHTML = x;

    }



    function hideStuff() {
        
    }

  
    // function printQuestions(data) {

    //     var htmlString = "";
        
    //     for (i=0; i < data.length; i++) {
    //         htmlString += data[i].question + "";
            
    //     }
    //     question.insertAdjacentHTML('beforeend',htmlString);
    
    // }
    


