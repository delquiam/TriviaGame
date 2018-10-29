$(document).ready(function () {

    var triviaQuestions = [
        {
            question: "Wonder Woman made her first appearance in what comic book?",
            answers: {
                a: "Wonder Woman #1",
                b: "Sensation Comics #1",
                c: "Action Comics #27",
                d: "All Star Comics #8",
            },
            correctAnswer: "d"
        },
        {
            question: " Which of Wonder Woman's accessories was forged from the magic girdle of Aphrodite?",
            answers: {
                a: "Lasso",
                b: "Bracelets",
                c: "Tiara",
                d: "Earrings",
            },
            correctAnswer: "a"
        },
        {
            question: "Who was the first costumed villain Wonder Woman ever faced?",
            answers: {
                a: "Cheetah",
                b: "Dr. Poison",
                c: "Dr. Psycho",
                d: "Giganta",
            },
            correctAnswer: "b"
        },
        {
            question: "What was the first superhero team Wonder Woman joined?",
            answers: {
                a: "All Star Squadron",
                b: "Justice Society of America",
                c: "Justice League of America",
                d: "Doom Patrol",
            },
            correctAnswer: "b"
        },
        {
            question: "Who created Wonder Woman?",
            answers: {
                a: "William Moulton Marston",
                b: "Bob Kane",
                c: "Jack Kirby",
                d: "Dorothy Woolfolk",
            },
            correctAnswer: "d"
        },
        {
            question: "What American pilot did Wonder Woman fall in love with when he crash-landed on Paradise Island?",
            answers: {
                a: "Terry Wagner",
                b: "Terry O'Neill",
                c: "Trevor Barnes",
                d: "Steve Trevor",
            },
            correctAnswer: "d"
        },
        {
            question: "Who played Wonder Woman in the 1970s TV show?",
            answers: {
                a: "Lindsay Wagner",
                b: "Lynda Carter",
                c: "Farrah Fawcett",
                d: "Kate Jackson",
            },
            correctAnswer: "b"
        },
        {
            question: "The first issue of what women's magazine featured Wonder Woman on the cover?",
            answers: {
                a: "Vogue",
                b: "Ms. Magazine",
                c: "Redbook",
                d: "Working Mother",
            },
            correctAnswer: "b"
        },
        {
            question: "During the 1960s, Wonder Woman became the pupil of what Chinese martial arts master?",
            answers: {
                a: "Sin Tzu",
                b: "Gao Xingjian",
                c: "I Ching",
                d: "Jet Li",
            },
            correctAnswer: "c"
        },
        {
            question: "Which of Wonder Woman's accessories allows her to breathe in outer space?",
            answers: {
                a: "Earrings",
                b: "Lasso",
                c: "Tiara",
                d: "Bracelets",
            },
            correctAnswer: "a"
        },

    ];

    function buildGame() {
        //  place to store the HTML output
        var output = [];

        // for each question...
    triviaQuestions.forEach((currentQuestion, questionNumber) => {
            // store the list of answer choices
          var answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        gameContainer.innerHTML = output.join("");
    }
    function showResults() {
        // gather answer containers from our quiz
        var answerContainers = gameContainer.querySelectorAll(".answers");
        // keep track of user's answers
        let numCorrect = 0;
        // for each question...
        triviaQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            var answerContainer = answerContainers[questionNumber];
            var selector = `input[name=question${questionNumber}]:checked`;
            var userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;
}               
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = "${numCorrect} out of ${triviaQuestions.length}";
      
    }

    var gameContainer = document.getElementById("game");
    var resultsContainer = document.getElementById("results");
    var submitButton = document.getElementById("submit");

    

    // display game right away
    buildGame();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
});