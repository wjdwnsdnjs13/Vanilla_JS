gibon ();
function gibon() {
	document.getElementById('create').addEventListener("click", cre);
	let halil = document.querySelectorAll('li');
	for (var i = 0; i<halil.length; i++){
		halil[i].addEventListener("mouseenter", enter_mouse);
		halil[i].addEventListener("mouseleave", leave_mouse);
	};
	
	
	
};

function cre() {
	this.innerHTML = "<input type='text' id='new_task'><button>+</button>";
	const new_task = document.getElementById('new_task')
	var val = new_task.value;
	new_task.focus();
	new_task.addEventListener("submit", function(e){
		e.preventDefault();
		console.log(val);
	});
};

function enter_mouse() {
	this.nextSibling.style.display = 'block';
};

function leave_mouse() {
	this.nextSibling.style.display = 'none';
};