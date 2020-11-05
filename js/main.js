// Funkcija

/*function daugyba(a,b){
    return a * b;
}
console.log(daugyba(3,2));*/
/*for (let i=0;i<5;i++){
    console.log(i);
    for (let i=1;i<8;i++){

    }
}*/
/*
article[0].style.backgroundColor = 'red';
article[1].style.backgroundColor = 'blue';
article[2].style.backgroundColor = 'green';
article[3].style.backgroundColor = 'yellow';
 */

//article[0].style.backgroundColor = 'tomato'; // naujo atributo kurimas
/*for (i = 0; i < article.length; i++) {
    article[i].style.backgroundColor = "tomato";
    if(i === 0 {
        article[i].style.backgroundColor = 'red';
        }
    if(i === 1 {
        article[i].style.backgroundColor = 'blue';
        }
    if(i === 2 {
        article[i].style.backgroundColor = 'green';
        }
    if(i === 3 {
        article[i].style.backgroundColor = 'yellow';
        }
     */

/*const article = document.querySelector('article');

    article.addEventListener('click',changeBg);
    function changeBg(){
        article.style.backgroundColor = "tomato";

 */
/*const article = document.querySelector('article h3');
const text = document.querySelector('input');
const btn = document.querySelector('.bg');

btn.addEventListener('click',changeText);

function changeText(){

    article.innerHTML = text.value; // <span>testas</span> kitas

}*/
const task = document.querySelector('input');
const btn = document.querySelector('.btn');
const remove = document.querySelector('.remove');


btn.addEventListener('click', addTask);
remove.addEventListener('click', removeTask);

function addTask() {
    const taskList = document.querySelector('.todo') //ul listas
    let li = document.createElement('li'); // sukuriu li
    li.textContent = task.value; // i li idedu vartotojo teksta
    taskList.appendChild(li); //pridedu li i ul

}

function removeTask(){
    const tasklist = document.querySelector('.todo') // ul listas
    const lastask = document.querySelector('.todo li:last-child'); //paimam paskutini li
    tasklist.removeChild(lastask); // pasalinam is domo paskutini li
}


