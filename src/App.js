import React from 'react';
import './App.css';
import Title from "./components/Title";
import UploadForm from './components/UploadForm';
import PhotoGrid from './components/PhotoGrid';

function App() {
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <PhotoGrid />
    </div>
  );
}

export default App;
