import './style.css'
import axios from 'axios';

const url = 'https://dog.ceo/api/breeds/image/random';

const getDog = ()=>{
  return axios.get(url).then( response => {
    let image = response.data.message;
    document.getElementById('image').src=image;
  })
}

getDog();

document.querySelector('#app').innerHTML = `
  <h1>Random dog image</h1>
  <img id="image" src="" alt="Dog" width="350" height="350" />
  <button onclick="getDog()">New dog</button>
`

window.getDog = getDog;