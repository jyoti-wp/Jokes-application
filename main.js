const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("jokebtn");

jokeBtn.addEventListener("click", getJoke);

getJoke();

async function getJoke() {
  const config = {
    headers: {
      Accept: "application/json"
    }
  };
  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();
  jokeElement.innerHTML = data.joke;
}
