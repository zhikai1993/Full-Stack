var todos = ["But new Turtle	11	"];
var input = prompt("What would you like to do?")

while (input !== "quit") {
	if (input === "new") {
		addTodo();
	} else if (input === "list") {
		listTodos();
	} else if (input === "delete") {
		deleteTodo();
	}
	input = prompt("What would you like to do?")
}


console.log("OK, You quit the App");

function addTodo() {
	var todo = prompt("Please enter a todo: ");
	todos.push(todo);
	console.log("addTodo")
}

function listTodos() {
	console.log("*********")
	todos.forEach(function(todo, i) {
		console.log(i + ": " +  todo);		
	});
	console.log("*********");
}

function deleteTodo() {
	var index = prompt("Enter the index of todo to delete");
	todos.splice(index, 1);
	console.log("Delete Todo");
}