$(document).ready(function () {

    var triviaQuestions;
    var answers=0;
    var numCorrect=0;
    var numIncorrect=0;
    var timer=45;


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

    
    $(".submit").click(function(){
        var formValue= $('input[name=question1]:checked').val();
       console.log(formValue);
    })
})
    