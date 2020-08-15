import React from 'react';
import './App.css';
import UploadForm from './components/UploadForm';
import PhotoGrid from './components/PhotoGrid';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <UploadForm />
        <PhotoGrid />
      </div>
    </>
  );
}

export default App;
