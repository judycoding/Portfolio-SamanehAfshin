let arraySelect=[];
const playercards = document.getElementById("player-cards");
const team = document.getElementById("team");
const check = document.getElementById("check");
const playersDropdownList = document.getElementById("players");
const selezionati = document.getElementById("selezionati");
const playercard = document.querySelector(".player-card");
const title1 = document.querySelector(".title1");
const chiudi = document.getElementById("chiudi");
const paga = document.getElementById("paga");
// const myp = document.getElementById("myp");
// team.textContent = "sisis";
// window.alert("Hello world!");


class Card {
    constructor(title, specialita, categoria, prezzo){
        this.title = title;
        this.specialita = specialita;
        this.categoria = categoria;
        this.prezzo = prezzo;

    }
}


class Display{
        static containerCards(cards){
          
            cards.forEach((card)=>{
              if(arraySelect.filter(select => select === card.title).length === 0){
                playercards.innerHTML +=` 
                     <div class="player-card">
                      <img src="images/${card.title}.png" alt="${card.categoria}" class="image-icon">                          
                       <h3 class="h3title">${card.title}</h3>
                       <br>
                       <p>Specialità : ${card.specialita}</p>
                       <p>Categoria: ${card.categoria}</p>
                       <p class="prezzo" >€ ${card.prezzo} </p>
                       <div id="red-icons"> 
                         <img src="images/corona1.png" alt="ok-icon" id="successo${card.title}" class="ok-icon vis">
                         <div id="num-click${card.title}" class="repeat vis"></div>
                         <img src="images/corona2.png" alt="ok-icon" id="successo2${card.title}" class="ok-icon vis">
                       </div>
                       <button type="button" class="ordina" onclick="addTodo('${card.title}','${card.prezzo}')">Aggiungi</button>      
                    </div>
               `}
                else{
                    let l = arraySelect.filter(select => select === card.title).length;
                    playercards.innerHTML +=` 
                         <div class="player-card">
                          <img src="images/${card.title}.png" alt="${card.categoria}" class="image-icon">                          
                           <h3 class="h3title">${card.title}</h3>
                           <br>
                           <p>Specialità : ${card.specialita}</p>
                           <p>Categoria: ${card.categoria}</p>
                           <p class="prezzo" >€${card.prezzo} </p>
                           <div id="red-icons"> 
                             <div id="num-click${card.title}" class="repeat">${l}</div>
                             <img src="images/ok-icon.png" alt="ok-icon" id="successo${card.title}" class="ok-icon">
                           </div>
                           <button type="button" class="ordina" onclick="addTodo('${card.title}','${card.prezzo}')">Aggiungi +</button>      
                        </div>
                   `   }                  
                                                                                 
             });
                                                           
            //  j = arraySelect.filter(select => select === title).length;
            //  console.log(j);
            //  document.getElementById(`num-click${title}`).innerHTML = `${j}`;
             
            }
                   
          //<div id="successo${card.title}" class="successo vis">Aggiunto</div>

                  //  <p class="options-label" > prodotto aggiunto <button type="submit" id="aggiunti">Guarda prodotti aggiunti</button></p>           
            
        static deleteProduct(el){
              if(el.classList.contains("delete")){
                  el.parentElement.parentElement.remove();
              }
              const pes=el.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
          
              if(document.getElementById(`num-click${pes}`).innerHTML === "1"){
              document.getElementById(`successo${pes}`).classList.add("vis");
              document.getElementById(`successo2${pes}`).classList.add("vis");
              document.getElementById(`num-click${pes}`).classList.add("vis");
              
              console.log(pes);
              arraySelect.splice(arraySelect.indexOf(pes), 1);
              } else {

                arraySelect.splice(arraySelect.indexOf(pes), 1);
                let z=arraySelect.filter(select => select === pes).length;
              
                document.getElementById(`num-click${pes}`).innerHTML = `${z}`;
                console.log(z);
                
              }
             }
   
}

const card1 = new Card("Kentucky Bacon", "Bacon", "panini", "8.99");
const card2 = new Card("Classic Original", "Original", "panini", "6.99");
const card3 = new Card("Classic Veggie", "Vegetariano", "panini", "7.99");
const card4 = new Card("Grilled Chicken", "Grilled", "panini", "8.99");
const card5 = new Card("Colonel Burger", "Colonel", "panini", "8.99");
const card6 = new Card("Kentucky BBQ", "BBQ", "panini", "9.99");
const card7 = new Card("Bucket Original", "Original", "Bucket", "12.99");
const card8 = new Card("Bucket + Hot Wings", "Hot Wings", "Bucket", "14.99");
const card9 = new Card("Bucket Veggie", "Vegetariano", "Bucket", "12.99");
const card10 = new Card("Box Meal Original", "Original", "Box Meal", "14.99");
const card11 = new Card("Junior Box Meal", "Junior", "Box Meal", "9.99");
const card12 = new Card("Pannocchia", "al forno", "Contorni", "3.99");
const card13 = new Card("Cheese Bites", "Formaggio", "Contorni", "3.99");
const card14 = new Card("Pure", "vellutato", "Contorni", "2.99");
const card15 = new Card(" Free Refill", "Sempre pieno", "Bibite", "2.99");
const card16 = new Card("Peroni 33 cl", "Rinfrescante", "Bibite", "2.99");
const card17 = new Card("Acqua", "Bibite", "Bibite", "2.99");
const card18 = new Card("Espresso", "Caffè", "Bibite", "2.99");





let cardsss = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16, card17, card18];
console.log(cardsss);
playercards.innerHTML = "";
Display.containerCards(cardsss);


playersDropdownList.addEventListener("change", (e) => {
    playercards.innerHTML = "";
    console.log(e.target.value);
  
    switch (e.target.value) {
      case "panini":
        Display.containerCards(cardsss.filter((card) => card.categoria === "panini"));
        break;

      case "bucket":
        Display.containerCards(cardsss.filter((card) => card.categoria === "Bucket"));
        break;

      case "contorni":
        Display.containerCards(cardsss.filter((card) => card.categoria === "Contorni"));
        break;

      case "box":
          Display.containerCards(cardsss.filter((card) => card.categoria === "Box Meal"));
          break;

      case "vegetariano":
            Display.containerCards(cardsss.filter((card) => card.specialita === "Vegetariano"));
            break;
      case "bibite":
            Display.containerCards(cardsss.filter((card) => card.categoria === "Bibite"));
            break;
      

      default :
           Display.containerCards(cardsss);
    }

    })

    selezionati.addEventListener("click", ()=>myDialog.showModal());
    selezionatiend.addEventListener("click", ()=>myDialog.showModal());
    

 chiudi.addEventListener("click", ()=>myDialog.close());
//   paga.addEventListener("click", ()=>myDialog.close());


 
  
  function addTodo(title,prezzo){
    // let i=1;
    let j;
    console.log(title);
    document.getElementById(`successo${title}`).classList.remove("vis");
    document.getElementById(`successo2${title}`).classList.remove("vis");
    document.getElementById(`num-click${title}`).classList.remove("vis");

    if  (!arraySelect.includes (title)) {
      arraySelect.push(title);
      document.getElementById(`num-click${title}`).innerHTML = "1";}
    else{
      arraySelect.push(title);
      
      j = arraySelect.filter(select => select === title).length;
      // console.log(j);
      document.getElementById(`num-click${title}`).innerHTML = `${j}`;
    }
  
      // const newCard = new Card(card.title, card.specialita, card.categoria, card.prezzo);

      // cards.push(newCard);
      
      // Todo.saveTodos();
  
      // myp.innerHTML += `<div>${title}       ${prezzo}</div>`;

      const row = document.createElement("tr");
      row.innerHTML = `
          <td class="tdTitle">${title}<td/>
          <td><img src="images/${title}.png" class="image-icon-dialog"><td/>
          <td class="tdPrezzo">${prezzo}<td/>          
          <td class="tdDelete"><a href="#" class="btn btn-danger btn-sm delete">X</a><td/>
      
          `;
          lists.appendChild(row);
      }
      
 
        

      lists.addEventListener("click", (e)=>{
        //Remove Book From UI
        Display.deleteProduct(e.target);
        //Remove Book From Store
        // Store.localremoveBook(e.target.parentElement.previousElementSibling.textContent);
    
        // UI.showAlert("Product removed", "success");
        
    });




