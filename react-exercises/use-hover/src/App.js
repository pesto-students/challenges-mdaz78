import React from 'react';
import './App.css';

function useHover() {
  const [isHovered, setIsHovered] = React.useState(false);
  const [element, setElement] = React.useState(null);

  const hoverRef = (domElement) => setElement(domElement);

  const setMouseOver = () => setIsHovered(true);
  const setMouseOut = () => setIsHovered(false);

  React.useEffect(() => {
    if (element) {
      element.addEventListener('mouseover', setMouseOver);
      element.addEventListener('mouseout', setMouseOut);

      return function cleanUp() {
        element.removeEventListener('mouseover', setMouseOver);
        element.removeEventListener('mouseout', setMouseOut);
      };
    }
  });

  return [hoverRef, isHovered];
}

function App() {
  const [hoverRef, isHovered] = useHover();
  return <div ref={hoverRef}>{isHovered ? 'Hovered !' : 'Hover me !'}</div>;
}

export default App;
