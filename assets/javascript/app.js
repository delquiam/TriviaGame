$(document).ready(function () {

    var triviaQuestions = 10;
    var correctAnswers = ['d', 'a', 'b', 'b', 'a', 'd', 'b', 'b', 'c', 'a'];
    var playerAnswer = [];
    var correct = 0;
    var incorrect = 0;
    var countdown = 45;
    var intervalId;


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

    function stop() {
        clearInterval(intervalId);
    }
    function run() {
        clearInterval(intervalId);//putting this here will make it run only one time
        intervalId = setInterval(timer, 1000);
      }
    function timer() {
        countdown--;
        $('#timer').text(countdown);
        if (countdown === 0) {
            stop();
        }       
    }
    $('#startBtn').on('click', function() {
        intervalId = setInterval(timer, 1000);   
            $('#timer').text(countdown);          
    });
    
    $(".submit").click(function () {
        $('form input:checked').each(function () {
            playerAnswer.push($(this).val());
        })
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



