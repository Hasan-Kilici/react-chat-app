import React from 'react';


class App extends React.Component {
  render() {
    return <>
      <script src="/socket.io/socket.io.js"></script>
      <script src="/public/script.js"></script>
			<link rel="stylesheet" href="/public/styles.css" />
      <div className="App" id="APP">
        <header className="App-header">
        <ul id="messages"></ul>
    <form id="form" action="">
      <input id="input" autocomplete="off" /><button>Send</button>
    </form>
        </header>
      </div>
    </>;
  }
}

export default App;
