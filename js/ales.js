const outputMessage = document.getElementById("beer-output");
const beerListSection = document.getElementById("beers-box")







async function getBeers() {
    try {
      const response = await fetch(`https://api.sampleapis.com/beers/ale`);
      if (!response.ok) {
        throw new Error(response.status);
      }
  
      const data = await response.json();
      console.log ("data: ", data)
    //   outputMessage.innerHTML = `${data[0].name} \<br> ${data[0].price}`;

    for (let i = 0; i < data.length; i++) {
        let beerBubble = document.createElement("ul");
        beerBubble.classList.add("bullets");
        beerListSection.appendChild(beerBubble);

        let beerName = document.createElement("li");
        beerName.classList.add("bullets-item");
        beerBubble.appendChild(beerName);
        beerName.innerText = data[i].name;
        // console.log(data[i].name)

        let beerPrice = document.createElement("li");
        beerPrice.classList.add("bullets-item");
        beerBubble.appendChild(beerPrice);
        beerPrice.innerText = `Average Price: ${data[i].price}`;

        let beerPic = document.createElement("li");
        beerPic.classList.add("beer-photo");
        beerBubble.appendChild(beerPic);
        beerPic.innerHTML = `\<img id="beer-pic" src="${data[i].image}" alt="beer pic">`;
    }
  
    } catch (error) {
        console.error(error);
        outputMessage.innerHTML = error;
      }
  }

  getBeers()