document.getElementById('flashcard1').addEventListener("click", displayAnswer);

const flashcard = document.getElementById("flashcard1")

function displayAnswer() {
    flashcard.childNodes[1].textContent = 'Document Object Model'
}
    


// function displayQuestion() {
//     document.getElementById("flashcard1").innerHTML =
//     "What is the DOM?";
//   }


// flashcard.onclick = function() {
//     const question = document.getElementById("question1")
//     const p = document.createElement('p')
//     console.log(p)
//     if (question === question.getAttribute('p')) {
//         p.innerHTML = "Document Object Model"
//         flashcard.appendChild(p)
//     }
// }

// function displayAnswer() {
    // document.getElementById("flashcard1").innerHTML ="Document Object Model";
    // p.innerHTML = "Document Object Model";
    // flashcard.appendChild(p)
    // const p = document.createElement('p')

