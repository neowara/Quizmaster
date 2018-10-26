    var ourData;
    var ourRequest;
    var index = 0;
    // var questionContainer = document.getElementById("qOutput");

    document.addEventListener('DOMContentLoaded', function (){

        ourRequest = new XMLHttpRequest(),
        method = "GET",
        url = "https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=boolean";
        

        ourRequest.open(method, url, true);
        ourRequest.onreadystatechange = function() {
            if ((ourRequest.readyState == 4) && (ourRequest.status == 200 )) {
                 ourData = ourRequest.response.results;

            // document.querySelector("#qOutput").innerHTML = ourData[0].question;

            // countScore(ourData);
            // printQuestions(ourData);
            buildQuiz();
            }
        }; 
        ourRequest.responseType = 'json';
        ourRequest.send();
        });

    // function countScore() {
    //     var answerChoices = document.quiz.answer1.value;
    //     var correctAnswers = 0;

    //     ourData.forEach(function(answer, index){
    //         var answerContainers = answerChoices[index];
    //         var selector = `input[name = question${index}]:checked`;
    //         var userAnswer = (answerChoices.querySelector(selector) || {}).;
    //         var answerValues = ourData[index].correct_answer;


    //     });

    // }

    const quizContainer = document.getElementById("qOutput");
    const resultsContainer = document.getElementById("aOutput");
    const submitButton = document.getElementById("submit");

    function buildQuiz( ) {

    var output = [];


    ourData.forEach(function (currentQuestion, index) {
        // we'll want to store the list of answer choices
        var answers = [];
  
        // and for each available answer...
          // ...add an HTML radio button
          answers.push(
            `<label>
               <input type="radio" name="question${index}" class="answersV" value="${currentQuestion.correct_answer}">
                ${currentQuestion.correct_answer}
                <input type="radio" name="question${index}" class="answersV" value="${currentQuestion.incorrect_answers}">
                ${currentQuestion.incorrect_answers}
             </label>`
          );  
        // add this question and its answers to the output
        output.push(
          `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
        );
      });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");


    

    }


    function showResults() {

        var answerContainers = quizContainer.querySelectorAll('.answers');

        var numCorrect = 0;
        var userAnswer = 0;


        for (var i=0; i < ourData.length; i++) {

            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

            if(userAnswer === ourData[i].correct_answer) {
                numCorrect++;
                console.log(numCorrect);
            } 
        }

        resultsCont.innerHTML = numCorrect + ' out of ' + ourData.length;


    }

    submitButton.onclick = function() {
        showResults();
    }


        // ourData.forEach(function (currentQuestion, index) {

        //     ourData[index].incorrect_answers.push(correct_answer);

        //     answerContainer = answerContainers[index];
        //     selector = "input[name=question${index}]:checked";
        //     var userAnswer = answerContainer.querySelector(selector).value;
            
        //     console.log(userAnswer);

        //         if (userAnswer.checked === ourData[index].correct_answer) {
        //             numCorrect++;
        //             console.log(numCorrect);
        //         } 
            
        // });

        // resultsContainer.innerHTML = `${numCorrect} out of ${ourData.length}`;







    // function printQuestions () {
    //     document.querySelector("#qOutput").innerHTML = ourData[index++].question;
    // }



      
    
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





