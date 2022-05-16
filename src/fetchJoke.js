import axios from "axios";

const fetchJoke = () => {
  const config = {
    headers: {
      accept: "application/json",
    },
  };
  axios
    .get("https://icanhazdadjoke.com", config)
    .then((res) => (document.getElementById("joke").innerHTML = res.data.joke));
  return "A joke here.";
};

export default fetchJoke;
