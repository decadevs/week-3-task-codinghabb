 //targeting my element 
 let starNames = document.querySelector(".wrapper")
 let images = ['images/LukeSkywalker.jpeg','images/c-3po.jpeg','images/R2-D2.jpeg','images/DarthVader.jpeg','images/LeiaOrgana.jpeg','images/OwenLars.jpeg','images/BeruWhitesunlars.jpeg','images/R5-D4.jpeg','images/BiggsDarklighter.jpeg','images/Obi-WanKenobi.jpeg']

//fetching from my array with promise


fetch("https://swapi.dev/api/people").then((response)=>{
  return response.json()
}).then((responseData)=>{
    //using using for of loop to get the results in my object from the api and diplaying images
    let index = 0; 
 for (const charNames of responseData.results) {
    
    //destructuring my charName object
    const {name, height, gender } = charNames;
    console.log(starNames); 

//displaying object properties and create a new element 
let div = document.createElement("div")
 div.className = "box";
    div.innerHTML = `
                     <img src=" ${images[index]}" alt=""> <br/>
                     
                   <button onClick="showElement(${index})">${name}</button>
                    <div id='id-${index}' class="close">
                         <h3 id="name"> ${name}</h3>
                         <p id="gender"> ${gender} </p>
                         <p id="height"> ${height}</p>
                    </div>
                ` 
 starNames.appendChild(div)
 index++
 }
})

function showElement(index){
    //alert("this is working");
 let showHide = document.querySelector(`#id-${index}`);
   showHide.classList.toggle("open");
}



