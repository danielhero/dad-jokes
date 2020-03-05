export const Joke = (jokeObject) => {
   return `
   <div class="eachJokeContainer">
        <h4>Joke #${jokeObject.id}</h4>
        <div class="eachJoke">
            <p>QUESTION: ${jokeObject.question}<p>
        </div>
        <div class="idButton">
        <button id="button--${jokeObject.id}">Answer</button>
                <dialog class="jokeAnswer">  
                    <div>ANSWER: ${jokeObject.answer}</div>
                    <button class="button--close">Close</button>
                </dialog>
        </div>
        
    `
}


