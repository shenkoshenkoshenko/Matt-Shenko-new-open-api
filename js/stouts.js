const outputMessage = document.getElementById("beer-output");
const beerListSection = document.getElementById("beers-box");
const wikiBeer = document.getElementById("about-beer");



async function getBeers() {
    try {
      const response = await fetch(`https://api.sampleapis.com/beers/stouts`);
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



  function searchBeer() {
    // ***********************************this creates JS to send to wikipedia instead of an HTML request so as to get around CORS issue
    const searchBeer = document.createElement('script');
    searchBeer.src = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&srlimit=20&srsearch=stout&callback=wikiSearch&origin=*`;
    document.body.appendChild(searchBeer);
    // ***********************************the above apends the script to HTML, which loads the API call
    //************************************wikipedia then sends back 'data' as an argument to the wikiSearch function, below */
  }
  
  function wikiSearch(data) {
    console.log(data);
    wikiBeer.innerHTML = `${data.query.search[0].snippet}...\<a class="outside-link" href="https://en.wikipedia.org/wiki/Stout">(read more)</a>`

  }
  
  searchBeer();