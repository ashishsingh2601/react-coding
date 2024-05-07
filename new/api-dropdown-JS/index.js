import { apiUrl } from "./urls.js";

const select = document.querySelector("#selector");
const table = document.querySelector(".table");

async function fetchAllPokemon(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data = await response.json();
    makeOptions(data);
  } catch (err) {
    console.log(err);
  }
}

fetchAllPokemon(apiUrl);

function makeOptions(options = []) {
  console.log(options);
  options?.results?.forEach((option) => {
    let optionElement = document.createElement("option");
    optionElement.innerText = option.name;
    optionElement.setAttribute("value", option.name);
    select.appendChild(optionElement);
  });
}


let pokename = "";
select.addEventListener("change", (e) => {
  const { value } = e.target;

  pokename = value;
  let cachedPokemon = localStorage.getItem(value);

  cachedPokemon = JSON.parse(cachedPokemon);
  if (cachedPokemon) {
    let { height, weight, base_experience, pokename } = cachedPokemon;
    buildPokemonTable(height, weight, base_experience, pokename);
    return;
  } else {
    async function fetchPokeDetail(url) {
      try {
        const response = await fetch(`${url}/${value}`);
        if (!response.ok) {
          throw new Error("Something went wrong while fetching details");
        }

        const data = await response.json();

        const { height, weight, base_experience } = data;
        localStorage.setItem(
          value,
          JSON.stringify({
            height,
            weight,
            base_experience,
            pokename,
          })
        );

        buildPokemonTable(height, weight, base_experience, pokename);
      } catch (err) {
        console.log(err);
      }
    }

    fetchPokeDetail(apiUrl);
  }
});



function initialTableStructure() {
    const headrow = document.createElement("tr");

    const headName = document.createElement("th");
    const headheight = document.createElement("th");
    const headweight = document.createElement("th");
    const headexp = document.createElement("th");

    headName.innerText = "Name";
    headrow.appendChild(headName);

    headheight.innerText = "Height";
    headrow.appendChild(headheight);

    headweight.innerText = "Weight";
    headrow.appendChild(headweight);

    headexp.innerText = "Experience";
    headrow.appendChild(headexp);

    table.appendChild(headrow);
}


function buildPokemonTable(height, weight, base_experience, pokename){
    initialTableStructure();

    console.log(height, weight, base_experience, pokename);

    const bodyrow = document.createElement("tr");
    const bodyName = document.createElement("td");
    const bodyheight = document.createElement("td");
    const bodyweight = document.createElement("td");
    const bodyexp = document.createElement("td");

 
    bodyName.innerText = pokename;
    bodyrow.appendChild(bodyName);

    bodyheight.innerText = height;
    bodyrow.appendChild(bodyheight);

    bodyweight.innerText = weight;
    bodyrow.appendChild(bodyweight);

    bodyexp.innerText = base_experience;
    bodyrow.appendChild(bodyexp);

    table.appendChild(bodyrow);
}

