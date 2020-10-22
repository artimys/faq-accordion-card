/*******************************************
 * COMMON PAGE ELEMENTS
 * *****************************************/

const questions = document.getElementsByClassName("faq-section__question");
const answers = document.getElementsByClassName("faq-section__answer");


function displayQuestion(event) {
    event.preventDefault();

    // Hide all answers by remove the open class
    for (i=0; i < answers.length; i++) {
        answers[i].parentElement.classList.remove("faq-section--open");
    }

    // Add class to parent container of question
    this.parentElement.classList.add("faq-section--open");
}


for (i=0; i < questions.length; i++) {
    questions[i].addEventListener("click", displayQuestion);
}

