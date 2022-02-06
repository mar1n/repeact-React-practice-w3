let model = {
    todos: [
        { text: 'arrays', isChecked: true }
    ]
}

function appReady() {
    renderTodos();
}

function renderTodos() {
    let rootNode = document.querySelector('#todoList');
    model.todos.forEach(todo => {
        rootNode.appendChild(getTodoNode(todo));
    });
}

function getTodoNode(todo) {
    let todoNode = document.createElement('div');
    todoNode.setAttribute(
        'class', 
        `todo-item ${todo.isChecked ? 'is-checked' : ''}`);
    todoNode.appendChild(getTodoCheckboxNode(todo));
    todoNode.appendChild(getTodoLabelNode(todo));
    //todoNode.innerText = todo.text;
    return todoNode;
}

function getTodoCheckboxNode(todo) {
    let checkboxNode = document.createElement('input');
    checkboxNode.setAttribute('type', 'checkbox');
    if(todo.isChecked) {
        checkboxNode.setAttribute('checked', '');
    }
    return checkboxNode;
}

function getTodoLabelNode(todo) {
    let labelNode = document.createElement('label');
    labelNode.innerText = todo.text;
    return labelNode;
}