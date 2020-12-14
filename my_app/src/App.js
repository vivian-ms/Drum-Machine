import { useState } from 'react';
import DrumPads from './components/DrumPads';
import Display from './components/Display';

const sound_bank = [
  {
    letter: 'Q',
    id: 'heater-1',
    name: 'Heater 1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    letter: 'W',
    id: 'heater-2',
    name: 'Heater 2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    letter: 'E',
    id: 'heater-3',
    name: 'Heater 3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    letter: 'A',
    id: 'heater-4',
    name: 'Heater 4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    letter: 'S',
    id: 'clap',
    name: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    letter: 'D',
    id: 'open-hh',
    name: 'Open HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    letter: 'Z',
    id: 'kick-n-hat',
    name: 'Kick n\' Hat',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    letter: 'X',
    id: 'kick',
    name: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    letter: 'C',
    id: 'closed-hh',
    name: 'Closed HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
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
