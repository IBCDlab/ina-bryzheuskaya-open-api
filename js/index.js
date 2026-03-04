const cards = document.querySelector(".cards"); //container where cards will be placed
const buttonArtworks = document.querySelector("#button-artworks");
const buttonArtists = document.querySelector("#button-artists");
const title = document.querySelector("#title");

// Fetch 1

buttonArtworks
    .addEventListener("click", function () {
        fetch("https://api.artic.edu/api/v1/artworks?limit=10")
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("Request failed.");
                }
                return response.json();
            })

            .then(function (data) {
                title.textContent = "Artworks"
                cards.textContent = ""; //Clear container before adding new
                //Loop
                for (let i = 0; i < data.data.length; i++) {
                    //Create a new div
                    const div = document.createElement("div");
                    //The text insert inside the div
                    div.textContent = data.data[i].title;
                    div.className = "card"; //CSS class add
                    //The element insert into the DOM
                    cards.appendChild(div);
                }
            })
            .catch(function (error) {
                console.log("Error:", error);
            });
    });

//Fetch 2

buttonArtists
    .addEventListener("click", function () {
        fetch("https://api.artic.edu/api/v1/artists?limit=10")
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("Request failed.");
                }
                return response.json();
            })

            .then(function (data) {
                title.textContent = "Artists";
                cards.textContent = "";
                for (let i = 0; i < data.data.length; i++) {
                    const div = document.createElement("div");
                    div.textContent = data.data[i].title;
                    div.className = "card";
                    cards.appendChild(div);
                }
            })
            .catch(function (error) {
                console.log("Error:", error);
            });
    });