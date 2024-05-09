import { url } from "./urls.js";

const container = document.querySelector(".container");

let finalData = [];

async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data = await response.json();

    console.log("firstRes->", data);
    fetchFurther(data);
  } catch (err) {
    console.log(err);
  }
}

fetchData(url);

const ids = [];
function fetchFurther(data = []) {
  data?.forEach((item) => {
    ids.push(item.id);
  });

  finalDataMaker(ids);
  parallelCallMaker(ids);
}

function finalDataMaker(ids = []) {
  finalData = ids?.map((id) => {
    return { id };
  });
}

function parallelCallMaker(ids = []) {
  const urlsToCall = ids?.map((id) => `${url}/${id}`);

  const requests = urlsToCall?.map((urlToCall) => fetch(urlToCall));

  Promise.all(requests)
    .then((responses) => {
      console.log(responses);
      return Promise.all(responses?.map((response) => response.json()));
    })
    .then((data) => {
      dataAppender(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function dataAppender(data = []) {
  console.log("inside", data);

  data?.forEach((dataItem, index) => {
    finalData[index].title = dataItem.title;
  });

  domAppender(finalData);
}

function domAppender(finalData = []) {

    // Create a Set to store unique IDs
  const uniqueIds = new Set();

  // Create a new array to store filtered finalData
  const uniqueFinalData = [];

  // Iterate over finalData
  finalData?.forEach((dataItem) => {
    // Check if the ID is not already in the Set
    if (!uniqueIds.has(dataItem.id)) {
      // If not, add it to the Set and push the dataItem to uniqueFinalData
      uniqueIds.add(dataItem.id);
      uniqueFinalData.push(dataItem);
    }
  });



  finalData?.forEach((dataItem) => {
    const divElement = document.createElement("div");
    const id_p = document.createElement("p");
    const title_p = document.createElement("p");
  
    divElement.classList.add("content__container");

    id_p.textContent = dataItem.id;
    title_p.textContent = dataItem.title;

    divElement.appendChild(id_p);
    divElement.appendChild(title_p);

    container.appendChild(divElement);
  });
}
