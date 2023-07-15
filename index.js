import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase,ref,push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-31c21-default-rtdb.firebaseio.com/"
    
}

const app= initializeApp(appSettings)
const database = getDatabase(app)
const groceries= ref(database, 'grocery')


const input= document.getElementById('input-field')
const addCartBtn = document.getElementById('add-button')
const shoppingListEl = document.getElementById("shopping-list")


addCartBtn.addEventListener('click',function(){
 let inputValue = input.value
 push(groceries, inputValue)

 clearInput()
 shoppingList(inputValue)
  
}) 

function onValue (){
  shoppingList(snapshot)
}











function clearInput(){
  input.value = ''}  

function shoppingList(itemValue){
  shoppingListEl.innerHTML += `<li> ${itemValue}</li>`
}

