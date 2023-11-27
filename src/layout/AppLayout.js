import React, { useState } from 'react';
import { Grid, CssBaseline, Container, Typography } from '@mui/material';
import LinearProgressWithLabel from '../components/LinearProgress';
import ComicForm from '../components/ComicForm';
import ComicDisplay from '../components/ComicDisplay';
import query from '../api/GenerateComic';
import '../App.css';

function Layout() {
  const [comicImages, setComicImages] = useState([]);

  const [progress, setProgress] = useState(0);

  const [isSubmitPressed, setIsSubmitPressed] = useState(false);

  const generateComic = async (panelTexts) => {
    try {
      setIsSubmitPressed(true);
      setProgress(0);
      const imageBlobPromises = panelTexts.map((text) => query({ inputs: text }, () => setProgress((prev) => prev + 1)));
      const images = await Promise.all(imageBlobPromises);
      if (images.some(image => (image.size <= 842))) {
        alert('Some images could not be generated and will be displayed as a black screen. Please try again.');
      } 
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
            <Grid container spacing={5}>
                <Grid item xs={12} sm={6} md={4}>
                    <ComicForm onSubmit={generateComic} />
                </Grid>
                <Grid item xs={12} sm={6} md={8}>
                    {isSubmitPressed ? progress < 10 ? <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%'}}><Typography style={{fontWeight: 'bold', opacity: '0.5'}}>Generating comic strip...</Typography><LinearProgressWithLabel value={(progress / 10) * 100} /></div> : <ComicDisplay images={comicImages} /> : <Typography style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', height: '100%', fontWeight: 'bold', opacity: '0.5'}}>Enter text prompts to generate your comic strip!</Typography>}
                </Grid>
            </Grid>
        </Container>
    </div>
  );
}

export default Layout;
