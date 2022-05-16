import fetchJoke from "./fetchJoke";
import "./styles/index.scss";

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", fetchJoke);

fetchJoke();
