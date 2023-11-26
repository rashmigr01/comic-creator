import React, { useState } from 'react';

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

  return (
    <form onSubmit={handleSubmit}>
      {panelTexts.map((text, index) => (
        <div key={index}>
          <label>Panel {index + 1}:</label>
          <input
            type="text"
            value={text}
            onChange={(e) => handleChange(index, e.target.value)}
          />
        </div>
      ))}
      <button type="submit">Generate Comic</button>
    </form>
  );
};

export default ComicForm;
