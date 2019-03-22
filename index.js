function submitComment() {
    // Gather data from the form
    const styleAnswer = document.getElementById("answer1")
    const styleQuestion = document.getElementById("question1")
    const textArea = document.getElementById('userAnswer')
    const correct = document.getElementById('correct')
    const incorrect = document.getElementById('incorrect')
    let userAnswer = textArea.value 
    let goodAnswer = document.getElementsByTagName('p')[2].innerHTML
    console.log(goodAnswer)
    const myButton = document.getElementById("button")

    // Lowercase both answers
    userAnswer = userAnswer.toLowerCase()
    goodAnswer = goodAnswer.toLowerCase()

    if (userAnswer === goodAnswer) {
        console.log(true)
        styleQuestion.style.display="none";
        styleAnswer.style.display = "inline";
        correct.style.display = "inline";
    } else {
        console.log(false)
        incorrect.style.display = "inline";
        styleQuestion.style.display="none";
        styleAnswer.style.display = "inline";
    }       
    textArea.value = null
    
    
}


//     // Validates if answer or msg is filled and if msg is not too long
//     if (doesNotPassAllValidations(userAnswer)) {
//         return null
//     }
   

//     inputField.value = null
//     textArea.value = null
//  }


//  function checkAnswer(msg) {
//     //set bad words
//     const answer = 'document object model'
//     //convert the msg into an array with .split
//     const msgArray = msg.split(' ') 
//     //check if newA has any bw 
//     const checkAnswer = msgArray.filter(n => answer.includes(n))
//     console.log(checkAnswer)
//     // stating that if there's any bad word in checkBW it will return true
//     if (checkAnswer.length > 0) 
//     {return true
//     }else{
//         return false
//     }
// }
// console.log(checkAnswer('i am a model'))