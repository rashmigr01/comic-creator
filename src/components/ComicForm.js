import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const ComicForm = ({ onSubmit }) => {
  const [panelTexts, setPanelTexts] = useState(Array(10).fill(''));

  const handleChange = (index, value) => {
    const newPanelTexts = [...panelTexts];
    newPanelTexts[index] = value;
    setPanelTexts(newPanelTexts);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(panelTexts);
  };

  const isButtonDisabled = panelTexts.some((text) => text.trim() === '');

  return (
    <form onSubmit={handleSubmit} className="comic-form">
      {panelTexts.map((text, index) => (
        <Box key={index} mb={2} display={'flex'} flexDirection={'row'}>
          <Typography whiteSpace={'nowrap'} width={'7rem'}> Panel {index + 1}: </Typography>
          <TextField
            variant="outlined"
            fullWidth
            value={text}
            onChange={(e) => handleChange(index, e.target.value)}
            inputProps={{
              style: {
                padding: 5
              },
              placeholder: `Enter a text prompt for panel ${index + 1}`,
           }}
          />
        </Box>
      ))}
      <Button variant="contained" type="submit" color="primary" disabled={isButtonDisabled} sx={{ marginLeft: 'auto', marginRight: 'auto'}}>
        Generate Comic
      </Button>
    </form>
  );
};

export default ComicForm;
