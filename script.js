const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
const toDoContainer = document.querySelector('.toDoContainer');

btn.addEventListener ('click', function(){

    const item = document.createElement('li');
    item.innerText = inputField.value;
// console.log(item);
toDoContainer.appendChild(item);
item.classList.add ('toDoAdded');
inputField.value = ' ';

item.addEventListener('click', function(){
    item.classList.add ('toDoCompleted');
})
item.addEventListener('dblclick', function(){
    toDoContainer.removeChild(item);
} )

})