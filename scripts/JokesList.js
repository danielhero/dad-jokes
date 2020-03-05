import { useDadJokes } from "./JokesDataProvider.js";
import { Joke } from "./JokesHTML.js";

const contentTarget = document.querySelector(".jokeContainer")

export const JokeList = () => {
    const JokeArray = useDadJokes()

    for (const JokeObject of JokeArray) {
        const JokeString = Joke(JokeObject)

        contentTarget.innerHTML += JokeString
    }
}