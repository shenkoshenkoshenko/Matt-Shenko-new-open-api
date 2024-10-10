// let urlInput = document.getElementById('url');
// const fetchButton = document.getElementById('fetch');




// resetButton.style.display = 'none'



// function reset() {
//   resetButton.style.display = 'none';
//   outputMessage.innerHTML = '';
//   urlInput = document.getElementById('url').value = ""
// }



// async function getStouts() {
//   try {
//     const response = await fetch(`https://api.sampleapis.com/beers/stouts`);
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     const data = await response.json();
//     console.log ("data: ", data)
//     outputMessage.innerHTML = `\<img id="beer-pic" src="${data[0].image}" alt="beer pic"> \<br> ${data[0].name} \<br> ${data[0].price}`;

//   } catch (error) {
//       console.error(error);
//       outputMessage.innerHTML = error;
//     //   resetButton.style.display = '';
//     }
// }



// fetchButton.addEventListener('click', getStouts);
// resetButton.addEventListener('click', reset)