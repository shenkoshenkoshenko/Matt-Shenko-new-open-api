async function getAles() {
    try {
      const response = await fetch(`https://api.sampleapis.com/beers/ales`);
      if (!response.ok) {
        throw new Error(response.status);
      }
  
      const data = await response.json();
      console.log ("data: ", data)
      outputMessage.innerHTML = `${data[0].name} \<br> ${data[0].price}`;
  
    } catch (error) {
        console.error(error);
        outputMessage.innerHTML = error;
        resetButton.style.display = '';
      }
  }