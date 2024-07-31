document.addEventListener('DOMContentLoaded', (event) => {
    const tasks = {
        todo: [],
        pending: [],
        doing: [],
        blocked: [],
        done: []
    };

    function renderTasks() {
        for (const [status, tasksList] of Object.entries(tasks)) {
            const listElement = document.getElementById(`${status}-list`);
            listElement.innerHTML = '';
            tasksList.forEach((task, index) => {
                const taskElement = document.createElement('div');
                taskElement.className = 'task';
                taskElement.draggable = true;
                taskElement.textContent = task;
                taskElement.dataset.status = status;
                taskElement.dataset.index = index;
                taskElement.addEventListener('dragstart', dragStart);
                listElement.appendChild(taskElement);
            });
        }
    }

    function addTask(status) {
        const input = document.getElementById('new-task');
        if (input.value.trim()) {
            tasks[status].push(input.value.trim());
            input.value = '';
            renderTasks();
        }
    }

    function dragStart(event) {
        event.dataTransfer.setData('text/plain', JSON.stringify({
            status: event.target.dataset.status,
            index: event.target.dataset.index
        }));
    }

    function dragOver(event) {
        event.preventDefault();
    }

    function drop(event) {
        event.preventDefault();
        const data = JSON.parse(event.dataTransfer.getData('text/plain'));
        const fromStatus = data.status;
        const fromIndex = data.index;
        const toStatus = event.target.id.split('-')[0];

        if (fromStatus !== toStatus) {
            const [task] = tasks[fromStatus].splice(fromIndex, 1);
            tasks[toStatus].push(task);
            renderTasks();
        }
    }

    document.querySelectorAll('.task-list').forEach(column => {
        column.addEventListener('dragover', dragOver);
        column.addEventListener('drop', drop);
    });

    window.addTask = addTask;
    renderTasks();
});
