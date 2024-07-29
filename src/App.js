import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import Contact from './pages/contact';
import Footer from './pages/footer';


function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <router>
          <Layout />
          <routes>
            <route path="/" element={<home />}>
            </route>
            <Footer />
          </routes>
          <Footer />
        </router>
        <Footer />
      </header>
    </div>
  );
}

export default App;
