const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const word = document.getElementById('word');
const element = document.createElement('div');

function enter_data(word,definition,synonym,part_of_spech,phonetic,example){
    element.innerHTML = `
        <h2 id="word"><span>Word:  </span>${word}</h2>
        <p><span>Phonetic: </span>${phonetic}</p>
        <p id="definition"><span>Definition: </span>${definition}</p>
        <p id="part-of-speech"><span>Part of Speech: </span>${part_of_spech} </p>
        <p id="synonyms"><span>Synonyms: </span>${synonym}</p>
        <p id="example"><span>Example: </span>${example}</p>
    `
    content.appendChild(element);
}

async function get_data(word){
   let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
   let data = await fetch(`${url}`)
   .then(Response => Response.json())
   console.log(data);
   let definition = data[0].meanings[0].definitions[0].definition;
   let synonym = data[0].meanings[0].synonyms;
   let part_of_spech = data[0].meanings[0].partOfSpeech;
   let phonetic = data[0].phonetic;
   let example = data[0].meanings[0].definitions[0].example;
   enter_data(word,definition,synonym,part_of_spech,phonetic,example);
   console.log(example);
};

btn.addEventListener('click',()=>{
    let word = input.value.trim();
    element.innerHTML = " ";
    console.log(word);
    get_data(word);
} );