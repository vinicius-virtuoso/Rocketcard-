const nameUser = document.querySelector("#nameUser");
const avatarUser = document.querySelector("#avatarUser");
const countFollowers = document.querySelector("#countFollowers");
const countFollowing = document.querySelector("#countFollowing");
const countRepos = document.querySelector("#countRepos");
const companyUser = document.querySelector("#companyUser");
const locationUser = document.querySelector("#locationUser");
const buttonNewBg = document.querySelector("#buttonNewBg");
const cardContainer = document.querySelector("#cardContainer");

const api = axios.create({
  baseURL: "https://api.github.com/",
});

api
  .get("/users/vinicius-virtuoso")
  .then(({ data }) => {
    nameUser.innerText = data.name || "undefined";
    avatarUser.innerHTML = `<img src="${data.avatar_url}" alt="${data.name}"/>`;
    countFollowers.innerText = data.followers;
    countFollowing.innerText = data.following;
    countRepos.innerText = data.public_repos;
    companyUser.innerText = data.company ? `@${data.company}` : "Nenhuma";
    locationUser.innerText = data.location;
  })
  .catch((error) => {
    alert("Usuário não encontrado");
    console.error(error);
  });

buttonNewBg.addEventListener("click", newColor);

function newColor() {
  let newBg = `rgb(${parseInt(Math.random() * 255)}, ${parseInt(
    Math.random() * 255
  )}, ${parseInt(Math.random() * 255)})`;

  cardContainer.style.backgroundColor = newBg;
  avatarUser.style.borderColor = newBg;
}
