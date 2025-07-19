
const myproject = document.querySelector(".mybutton3");
const containerProject = document.querySelector(".right-div")

const selezionati = document.getElementById("selezionati");
const selezionati2 = document.getElementById("selezionati2");
const selezionati3 = document.getElementById("selezionati3");

const totale = document.getElementById("totale");
const totale2 = document.getElementById("totale2");
const totale3 = document.getElementById("totale3");


const myDialog = document.getElementById("myDialog");
const myDialog2 = document.getElementById("myDialog2");
const myDialog3 = document.getElementById("myDialog3");



myproject.addEventListener("click", ()=>{
  containerProject.style.display="block";
})


//////// dialog
selezionati.addEventListener("click", ()=>myDialog.showModal());
selezionati2.addEventListener("click", ()=>myDialog2.showModal());
selezionati3.addEventListener("click", ()=>myDialog3.showModal());

    

totale.addEventListener("click", ()=>myDialog.close());
totale2.addEventListener("click", ()=>myDialog2.close());
totale3.addEventListener("click", ()=>myDialog3.close());

        

const modal = document.querySelector('.my-modal')
