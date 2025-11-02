// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets =[];

// Eventos
eventos()
function eventos() {
    formulario.addEventListener('submit', agregarTweet);
}

// Funciones
function agregarTweet(e) {
    e.preventDefault();

    // Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    // Validación
    if(tweet === '') {
        mostrarError('Un mensaje no puede ir vacio')
        return; // Evita que se ejecute más lineas de código
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }
    
    // Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];

    // Una vez agregado vamos a crear el HTML
    crearHTML();

    // Reiniciar el formulario
    formulario.reset();
}

// Mostrar Mensaje de error
function mostrarError(error) {
    const mensajeError = document.createElement('P');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertarlo en el Contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // Elimina la alerta después de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

// Muestra un listado de los tweets
function crearHTML() {
    limpiarHTML();

    if(tweets.length > 0) {
        tweets.forEach(tweet => {
            // Crear el HTML
            const li = document.createElement('LI');

            // Añadir texto
            li.textContent = tweet.tweet;

            // Insertarlo en el HTML
            listaTweets.appendChild(li);
        });
    }
}

// Limpiar el HTML
function limpiarHTML() {
    while(listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}