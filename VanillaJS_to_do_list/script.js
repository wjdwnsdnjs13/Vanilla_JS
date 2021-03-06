const toDoForm = document.querySelector(".toDoForm");
const toDoLi = document.querySelector(".new_task");
function gibon() {
	document.getElementById('create').addEventListener("click", cre);
	let halil = document.querySelectorAll('li');
	for (var i = 0; i<halil.length; i++){
		halil[i].addEventListener("mouseenter", enter_mouse);
		halil[i].addEventListener("mouseleave", leave_mouse);
	};
};
function deleteToDo() {
	
};
function cre() {
	this.innerHTML = "<input type='text' id='new_task'><button>+</button>";
	const new_task = document.getElementById('new_task')
	new_task.focus();
	new_task.addEventListener("submit", submit);
};
function submit(e){
	e.preventDefault();
	const inputValue = document.getElementById('create').value;
	console.log(inputValue.value);
	//paintToDo(inputValue.value);
	//inputValue.value = '';
};
function paintToDo(text){
	const li = document.createElement('li');
	const delbtn = document.createElement('button');
	delbtn.text = "X";
	delbtn.addEventListener("click", deleteToDo);
	const span = document.createElement('span');
	const getId = document.querySelectorAll('li').length + 1;
	span.innerText = text;
	li.appendChild(span);
	li.appendChild(delbtn);
	li.id = getId;
	document.getElementById('toDoList').appendChild(li);
	 const toDoObj = {
        text: text,
        id: getId
    };
        toDos.push(toDoObj);
}

function enter_mouse() {
	this.nextSibling.style.display = 'block';
};

function leave_mouse() {
	this.nextSibling.style.display = 'none';
};
gibon ();