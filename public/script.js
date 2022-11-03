window.onload = ()=>{
let app = document.getElementById("APP");
let script = document.createElement("script");
script.textContent = `var socket = io();

  var messages = document.getElementById('messages');
  var form = document.getElementById('form');
  var input = document.getElementById('input');
  var username = prompt('Username?')
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
      socket.emit('chat message', input.value);
      input.value = '';
    }
  });

  socket.on('chat message', function(msg) {
    var item = document.createElement('li');
    item.textContent = username + " : " + msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight)
  });`;
app.appendChild(script);
}
