let characters = document.getElementById('characters')

const peticionMorty = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const fetchData = await response.json()

    return fetchData
}

const getAllCharacters = async () => {
    let allCh = await peticionMorty()
    
    allCh.results.map((character) => {

        console.log(character)
        characters.innerHTML += `
        
        <div class="character">
                <img class="ch-image" src="${character.image}" alt="${character.name}">
            
            <div class="ch-data">
                <h3 class="ch-name">${character.name}</h3>
                ${character.gender == "Male" ? 
                '<img class="ch-gender" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Male-s%C3%ADmbolo2.svg/1200px-Male-s%C3%ADmbolo2.svg.png" /> '
                : 
                '<img class="ch-gender" src="https://images.emojiterra.com/google/android-11/512px/2640.png" /> '
                 }
                <p class="ch-species">Species: ${character.species}</p>
                <p class="ch-origin">Origin: ${character.origin.name}</p>
            </div>
        </div>
        
        `
    })

}

getAllCharacters()
