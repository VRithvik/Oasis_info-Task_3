document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;

        if (title.trim() === '') {
            alert('Please fill out the title field.');
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${title}</span>
            <span>${description}</span>
            <button class="delete">X</button>
        `;

        taskList.appendChild(taskItem);

        // Clear input fields
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
    });

    taskList.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete')) {
            e.target.parentElement.remove();
        }
    });
});