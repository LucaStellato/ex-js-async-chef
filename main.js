

async function getChefBirthDay(id) {
    const ricetta = await fetch(`https://dummyjson.com/recipes/${id}`)
    const ricettaResponse = await ricetta.json();
    console.log(ricettaResponse)
    const chef = await fetch(`https://dummyjson.com/users/${ricettaResponse.userId}`)
    const chefResponse = await chef.json();
    console.log(chefResponse)
    const birth = dayjs(chefResponse.birthDate).format("DD/MM/YYYY")


    return birth

}


(async () => {
    try {
        const ricetta = await getChefBirthDay(1);

        console.log("Data di nascita dello chef:", ricetta)


    } catch (error) {
        console.error(error)
    }
})()



/*getChefBirthDay(1)
    .then(birthday => console.log("Data di nascita dello chef:", birthday))
    .catch(error => console.error("Errore:", error.message));*/