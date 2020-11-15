import { useState } from 'react';
import DrumPads from './components/DrumPads';
import Display from './components/Display';

const sound_bank = [
  {
    letter: 'Q',
    id: 'sound_1',
    name: 'Sound 1',
    url: '',
  },
  {
    letter: 'W',
    id: 'sound_2',
    name: 'Sound 2',
    url: '',
  },
  {
    letter: 'E',
    id: 'sound_3',
    name: 'Sound 3',
    url: '',
  },
  {
    letter: 'A',
    id: 'sound_4',
    name: 'Sound 4',
    url: '',
  },
  {
    letter: 'S',
    id: 'sound_5',
    name: 'Sound 5',
    url: '',
  },
  {
    letter: 'D',
    id: 'sound_6',
    name: 'Sound 6',
    url: '',
  },
  {
    letter: 'Z',
    id: 'sound_7',
    name: 'Sound 7',
    url: '',
  },
  {
    letter: 'X',
    id: 'sound_8',
    name: 'Sound 8',
    url: '',
  },
  {
    letter: 'C',
    id: 'sound_9',
    name: 'Sound 9',
    url: '',
  }
];  // End sound_bank

const App = () => {
  const [sound, setSound] = useState('');

  const soundPlayed = sound => {
    setSound(sound);
  }

  return (
    <div>
      <DrumPads sound_bank={sound_bank} soundPlayed={soundPlayed} />
      <Display sound={sound} />
    </div>
  );
};

export default App;
