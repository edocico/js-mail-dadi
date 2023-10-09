console.log('hello world')

// EMAIL 

// recupero elementi che mi servono dal DOM

const sendButtonDOMElement = document.getElementById('send-button')

const inputEmailDOMElement = document.querySelector('.input-email')

// creo un array di email

const emailArray = [
    'babbo.ciao@gmail.com' ,
    'mamma.ciao@gmail.com' ,
    'amico.ciao@gmail.com' ,
    'lavoro.ciao@gmail.com' ,
    'piazza.ciao@gmail.com' ,
    'bar.ciao@gmail.com' ,
]

console.log(emailArray)

// dichiaro una variabile per salvare il valore dell'array length

let arrayLength = emailArray.length

console.log(arrayLength)

// ascolto l'evento click sul bottone invia
sendButtonDOMElement.addEventListener('click', function() {

    // recupero il valore nel campo di input

    const userEmail = inputEmailDOMElement.value

    // pusho il valore recuperato nell'array

    emailArray.push(userEmail)

    console.log(emailArray)

    console.log(arrayLength)
})