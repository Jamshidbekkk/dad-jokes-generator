const btnEl = document.getElementById("btn");


const apiKey = "xhTj3R+oDm8lLSde/AMzBA==7r1aplENzR9V2xMy";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
    const response = await fetch(apiURL, options);
    const data = await response.json();

    console.log(data[0].joke);
}

btnEl.addEventListener("click", getJoke)