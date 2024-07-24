import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'


function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <router>
          <Layout />
          <routes>
            <route path="/" element={<home />}>
            </route>
          </routes>
        </router>
      </header>
    </div>
  );
}

export default App;
