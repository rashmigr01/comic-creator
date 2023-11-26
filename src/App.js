import './App.css';
import React, { useState } from 'react';
import ComicForm from './components/ComicForm';
import ComicDisplay from './components/ComicDisplay';
import query from './api/GenerateComic';

function App() {
  const [comicImages, setComicImages] = useState([]);

  const generateComic = async (panelTexts) => {
    try {
      const imageBlobPromises = panelTexts.map((text) =>
        query({ inputs: text })
      );
      const images = await Promise.all(imageBlobPromises);
      console.log('Generated comic images:', images);
      setComicImages(images);
    } catch (error) {
      console.error('Error generating comic:', error);
    }
  };

  return (
    <div>
      <h1>Comic Creator</h1>
      <ComicForm onSubmit={generateComic} />
      <ComicDisplay images={comicImages} />
    </div>
  );
}

export default App;
