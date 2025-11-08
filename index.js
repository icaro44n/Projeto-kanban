import { db } from './firebase-config.js';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');

// --- Funções Globais para Drag and Drop ---

let draggedTaskId = null;

window.drag = (event) => {
    draggedTaskId = event.target.id;
    event.dataTransfer.setData("text", event.target.id);
}

window.drop = async (event) => {
    event.preventDefault();
    const taskId = event.dataTransfer.getData("text");
    const taskElement = document.getElementById(taskId);
    let targetColumn = event.target;

    // Garante que o alvo seja a coluna, não um elemento filho
    while (!targetColumn.classList.contains('kanban-column')) {
        targetColumn = targetColumn.parentElement;
    }

    const newStatus = targetColumn.id;
    const tasksContainer = targetColumn.querySelector('.tasks-container');
    tasksContainer.appendChild(taskElement);

    // Atualiza o status da tarefa no Firestore
    const taskRef = doc(db, "tasks", taskId);
    await updateDoc(taskRef, {
        status: newStatus
    });
    draggedTaskId = null;
}

// --- Funções do Firestore ---

const addTask = async () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Por favor, insira uma tarefa.');
        return;
    }

    try {
        await addDoc(collection(db, "tasks"), {
            text: taskText,
            status: 'todo' // Status inicial
        });
        taskInput.value = '';
    } catch (e) {
        console.error("Erro ao adicionar tarefa: ", e);
    }
};

const renderTask = (taskDoc) => {
    const task = taskDoc.data();
    const taskId = taskDoc.id;
    const column = document.getElementById(`${task.status}-tasks`);

    // Evita duplicar a tarefa se ela já existir
    if (document.getElementById(taskId)) {
        // Se a tarefa já existe, apenas garante que está na coluna certa
        const existingTask = document.getElementById(taskId);
        if (existingTask.parentElement.id !== `${task.status}-tasks`) {
             column.appendChild(existingTask);
        }
        return;
    }

    const taskElement = document.createElement('div');
    taskElement.id = taskId;
    taskElement.className = 'task';
    taskElement.draggable = true;
    taskElement.textContent = task.text;
    taskElement.setAttribute('ondragstart', 'drag(event)');

    column.appendChild(taskElement);
};

// --- Event Listeners ---

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Escuta por mudanças em tempo real na coleção 'tasks'
onSnapshot(collection(db, "tasks"), (querySnapshot) => {
    querySnapshot.forEach(renderTask);
});