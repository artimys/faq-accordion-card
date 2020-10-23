const questions = document.getElementsByClassName("faq-section__question");
const answers = document.getElementsByClassName("faq-section__answer");


function displayQuestion(event) {
    event.preventDefault();

    let parentSection = this.parentElement;

    if (parentSection.classList.contains("faq-section--open")) {
        // This current element's parent should
        // be the only open section

        // Just toggle it off
        parentSection.classList.toggle("faq-section--open");

    } else {
        // Otherwise a different parent is open
        // so close all of them
        for (i=0; i < answers.length; i++) {
            answers[i].parentElement.classList.remove("faq-section--open");
        }

        // Add class to current parent container of question
        parentSection.classList.add("faq-section--open");
    }
}


// Add click event listener to each element
for (i=0; i < questions.length; i++) {
    questions[i].addEventListener("click", displayQuestion);
}

