let api = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
let word = document.querySelector('#search-input')
let searchBtn = document.querySelector('#search')
let meaningContainer = document.querySelector('#meanings-container')


searchBtn.addEventListener('click', () => {
    fetch(api + word.value)
        .then(res => res.json())
        .then(res => {
            // console.log(res[0].meanings)
            let meanings = res[0].meanings
            document.querySelector('#word').innerText = res[0].word
            for (let i = 0; i < meanings.length; i++) {
                console.log(meanings[i])
                meaningContainer.innerHTML += `
                <div class="meaning-block">
                    <div class="part-of-speech">
                        <h2>${meanings[i].partOfSpeech}</h2>
                    </div>
                    <h3>Meaning</h3>
                    <ul>
                        <li>${meanings[i].definitions[0].definition}</li>
                    </ul>
                </div>
                `
            }
        })
})
