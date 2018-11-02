$(document).ready(function () {

    var triviaQuestions = 10;
    var correctAnswers = ['d', 'a', 'b', 'b', 'a', 'd', 'b', 'b', 'c', 'a'];
    var playerAnswer = [];
    var correct = 0;
    var incorrect = 0;
    var countdown = 60;


    /**
     * START CLICKED
        *start timer
     * SUBMIT IS CLICKED OR TIMER RUNS OUT   
        *get answer values from chosen answers
        *compare chosen answers to correct answers
        *if chosen answer===correct answer, numCorrect++
        *if else chosen answer is incorrect, numIncorrect++
        *display correct and incorrect answers
        *reset game and timer
     */



    $(".submit").click(function () {
        $('form input:checked').each(function () {
            playerAnswer.push($(this).val());
        })
        console.log(playerAnswer);
        for (var i = 0; i < correctAnswers.length; i++) {
            if (correctAnswers[i] === playerAnswer[i]) {
                correct++;
                $('#answersRight').text(correct);
            }
            else {
                incorrect++;
                $('#answersWrong').text(incorrect);
            }
        }
    })





});



