function submitComment() {
    // Gather data from the form
    const textArea = document.getElementById('userAnswer')
    let userAnswer = textArea.value 
    const goodAnswer = document.getElementsByTagName('p')[0].innerHTML
    console.log(goodAnswer)
    if (userAnswer === goodAnswer) {
        console.log(true)
    } else {
        console.log(false)
}
}


//     // Validates if answer or msg is filled and if msg is not too long
//     if (doesNotPassAllValidations(userAnswer)) {
//         return null
//     }
//     // Uppercase first letter of userAnswer if it is not already
//     if (userAnswer[0] === userAnswer[0].toLowerCase()) {
//         userAnswer = userAnswer.charAt(0).toUpperCase() + userAnswer.slice(1)
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