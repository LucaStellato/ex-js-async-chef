

async function getChefBirthDay(id) {
    const ricetta = await fetch(`https://dummyjson.com/recipes/${id}`)
    const ricettaResponse = await ricetta.json();
    console.log(ricettaResponse)
    const chef = await fetch(`https://dummyjson.com/users/${ricettaResponse.userId}`)
    const chefResponse = await chef.json();
    console.log(chefResponse)
    return chefResponse.birthDate

}


getChefBirthDay(1)
    .then(birthday => console.log("Data di nascita dello chef:", birthday))
    .catch(error => console.error("Errore:", error.message));