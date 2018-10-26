    
    //here we define our global variables

    var ourData;
    var ourRequest;
    var index = 0;
    const quizContainer = document.getElementById("qOutput");
    const resultsContainer = document.getElementById("aOutput");
    const submitButton = document.getElementById("submit");

    //connect to the API and get the response and tell our 
    //browser to read it in the form of JSON

    document.addEventListener('DOMContentLoaded', function (){

        ourRequest = new XMLHttpRequest(),
        method = "GET",
        url = "https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple";
        

        ourRequest.open(method, url, true);
        ourRequest.onreadystatechange = function() {
            if ((ourRequest.readyState == 4) && (ourRequest.status == 200 )) {
                 ourData = ourRequest.response.results;

            buildQuiz();
            }
        }; 
        ourRequest.responseType = 'json';
        ourRequest.send();
        });







    //here we create a function that will build 
    //our quiz questions and answers
    function buildQuiz() {

            var output = [];

            ourData.forEach(function (currentQuestion, index) {

                // we'll want to store the list of answer choices
                // we can even push the correct answers into 
                //the incorrect answers array that already exists

                var answers = [];
                var altRand = [];
                var alternatives = ourData[index].incorrect_answers;
                alternatives.push(ourData[index].correct_answer);

                //randomize our answers so they that the correct 
                //answers don't always the same index

                for (var y = 4; y > 0; y--) {
                    var n = Math.floor(Math.random() * y);
                    var alt = alternatives[n];
                    altRand.push(alt);
                    alternatives.splice(n,1);
                    }
                    console.log(altRand);


                    // and for each available answer...
                    // ...add an HTML radio button

                    for (var j = 0; j < altRand.length; j++) {
                    var button = document.createElement("input");
                    button.type = "radio";
                    button.value = altRand[j];
                    button.setAttribute("class", "button");
                    if (button.value == ourData[index].correct_answer) {
                        button.setAttribute("id", "correct");
                    }
                    answers.push(
                        `<label>
                            <input type="radio" name="question${index}" id="${button.id}" value="${button.value}">
                            ${altRand[j]}
                            </label>`
                        );  
                    }

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

    //lastly we need a function to count the user's answers and count a score

    function showResults() {

        //we create our variables to contain the possible answers and count the number of correct answers
        //and our user answers

        var answerContainers = quizContainer.querySelectorAll('.answers');
        var numCorrect = 0;
        var userAnswer = 0;

    // if our user click on the input that has an id with the "correct" value in it
    // then our score will increase and it will display how many are correct out of the 
    // amount of questions displayed

        for (var i=0; i < ourData.length; i++) {
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).id;
            if(userAnswer === "correct") {
                numCorrect++;
                console.log(numCorrect);
            } 
        }
        resultsCont.innerHTML = numCorrect + ' out of ' + ourData.length;
    }
    submitButton.onclick = function() {
        showResults();
    };

    








