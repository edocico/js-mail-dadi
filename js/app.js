console.log('hello world')

// EMAIL 

// recupero elementi che mi servono dal DOM

const sendButtonDOMElement = document.getElementById('send-button')

const inputEmailDOMElement = document.querySelector('.input-email')

const mainDOMElement = document.getElementById('main')

const pDOMElement = document.getElementById('access-p')

const playBtnDOMElement = document.getElementById('play-button')

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

const arrayLength = emailArray.length

console.log(arrayLength)

// ascolto l'evento click sul bottone invia
sendButtonDOMElement.addEventListener('click', function() {

    // recupero il valore nel campo di input

    const userEmail = inputEmailDOMElement.value

    // pusho il valore recuperato nell'array

    //emailArray.push(userEmail)

    // dichiaro variabile accesso a cui assegno valore false di default

    let accesso = false

    console.log(emailArray)

    console.log(arrayLength, emailArray.length)

    // ciclo l'array

    for (let i = 0; i < arrayLength; i++) {
        
        // dichiaro variabile mail per salvare il valore dell'index dell'array
        let mail = emailArray[i]
        console.log(mail)

        // con la condizionale se a una delle email presenti nell'array corrisponde la email inserita dall'utente
        if (userEmail === mail) {
            // se ne trovo una la variabile accesso assume il valore true
            accesso = true
        }
    }
    // se la variabile accesso assume il valore true allora l'accesso è consentito altrimenti no
    if ( accesso === true) {

        pDOMElement.innerHTML = 'accesso consentito'
        
    } else {
        pDOMElement.innerHTML = 'accesso negato'
    }
    // se accesso assume il valore true allora tramite un event do il via al gioco 
    if (accesso === true) {
        playBtnDOMElement.addEventListener('click', function() {
            // genero due numeri casuali tra 1 e 6 , uno per l'utente uno per la cpu
            const userGenNumber = Math.floor(Math.random() * 6) + 1
            console.log(userGenNumber)

            const cpuGenNumber = Math.floor(Math.random() * 6) + 1
            console.log(cpuGenNumber)
            // confronto i due numeri e vedo chi ha il più alto , in base a questo decido chi ha vinto
            if (userGenNumber > cpuGenNumber) {
                console.log('hai vinto')
            } else {
                console.log('hai perso')
            }

        })
    } else {
        alert('immetti un email valida')
        window.location.reload()  
    }
         
})