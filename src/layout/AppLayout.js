import React, { useState } from 'react';
import { Grid, CssBaseline, Container } from '@mui/material';
import ComicForm from '../components/ComicForm';
import ComicDisplay from '../components/ComicDisplay';
import query from '../api/GenerateComic';
import '../App.css';

function Layout() {
  const [comicImages, setComicImages] = useState([]);

  const generateComic = async (panelTexts) => {
    try {
      const imageBlobPromises = panelTexts.map((text) => query({ inputs: text }));
      const images = await Promise.all(imageBlobPromises);
      console.log('Generated comic images:', images);
      setComicImages(images);
    } catch (error) {
      console.error('Error generating comic:', error);
    }
  };

  return (
    <div className="outer-container">
      <CssBaseline />
        <Container component="main">
            <CssBaseline />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <ComicForm onSubmit={generateComic} />
                </Grid>
                <Grid item xs={12} sm={6} md={8}>
                    <ComicDisplay images={comicImages} />
                </Grid>
            </Grid>
        </Container>
    </div>
  );
}

export default Layout;
