import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

const ComicDisplay = ({ images }) => {
  const calculateLayout = () => {
    const columns = window.innerWidth > 1200 ? 5 : window.innerWidth > 768 ? 3 : 2;

    return images.map((_, index) => ({
      i: index.toString(),
      x: (index % columns) * 2,
      y: Math.floor(index / columns) * 2,
      w: 2,
      h: 2,
    }));
  };

  return (
    <ResponsiveGridLayout
      className="layout"
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 10, md: 8, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={100}
      margin={[10, 10]}
      containerPadding={[0, 0]}
      layout={calculateLayout()}
      isDraggable={true}
      isResizable={true}
    >
      {images.map((image, index) => (
        <div key={index} data-grid={{ i: index.toString(), x: 0, y: 0, w: 2, h: 2 }}>
          <img
            src={URL.createObjectURL(image)}
            alt={`Panel ${index + 1}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      ))}
    </ResponsiveGridLayout>
  );
};

export default ComicDisplay;
