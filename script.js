const socket = io("https://0e808be05062.grok-free.app", {
transports: ['websocket'] // force WebSocket to avoid CSP / eval issues
});

const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

form.addEventListener('submit', e => {
e.preventDefault();
if (input.value) {
socket.emit('chat message', input.value);
input.value = '';
}
});

socket.on('chat message', msg => {
const li = document.createElement('li');
li.textContent = msg;
messages.appendChild(li);
messages.scrollTop = messages.scrollHeight;
});



