const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const errorText = document.getElementById('errorText');

function setError(message) {
	errorText.textContent = message;
}

function buildTodoItem(taskText) {
	const li = document.createElement('li');
	li.className = 'todo-item';

	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';

	const span = document.createElement('span');
	span.textContent = taskText;

	const delBtn = document.createElement('button');
	delBtn.type = 'button';
	delBtn.className = 'delete-btn';
	delBtn.textContent = 'Delete';

	checkbox.addEventListener('change', () => {
		li.classList.toggle('done', checkbox.checked);
	});

	delBtn.addEventListener('click', () => {
		todoList.removeChild(li);
	});

	li.appendChild(checkbox);
	li.appendChild(span);
	li.appendChild(delBtn);

	return li;
}

todoForm.addEventListener('submit', (e) => {
	e.preventDefault();
	setError('');

	const value = todoInput.value.trim();
	if (value.length === 0) {
		setError('Task cannot be empty.');
		return;
	}

	const item = buildTodoItem(value);
	todoList.appendChild(item);

	todoInput.value = '';
	todoInput.focus();
});
