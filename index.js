// Fetch

fetch("https://api.artic.edu/api/v1/artworks")

.then(function(response){
    if(!response.ok){
        throw new Error("Request failed.")
    }
    return response.json();    
})

.then(function(data){
    console.log(data);
})

.catch(function(error){
    console.log("Error:", error);
});
