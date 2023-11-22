import React from 'react';
import ThemeSwitcher from './Theme';

const themes = [
  { background: 'lightblue', text: 'black' },
  { background: 'darkblue', text: 'white' },
  { background: 'red', text: 'white' },
  // Add more themes as needed
];

const App2 = () => {
  return (
      <ThemeSwitcher themes={themes} />
  );
};

export default App2;