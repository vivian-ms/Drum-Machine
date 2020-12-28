import { useState } from 'react';
import DrumPads from './components/DrumPads';
import Display from './components/Display';
import Toggle from './components/Toggle';
import Volume from './components/Volume';


const bank_1 = [
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
];  // End bank_1

const bank_2 = [
  {
    letter: 'Q',
    id: 'chord-1',
    name: 'Chord 1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    letter: 'W',
    id: 'chord-2',
    name: 'Chord 2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    letter: 'E',
    id: 'chord-3',
    name: 'Chord 3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    letter: 'A',
    id: 'shaker',
    name: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    letter: 'S',
    id: 'open-hh',
    name: 'Open HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    letter: 'D',
    id: 'closed-hh',
    name: 'Closed HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    letter: 'Z',
    id: 'punchy-kick',
    name: 'Punchy Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    letter: 'X',
    id: 'side-stick',
    name: 'Side Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    letter: 'C',
    id: 'snare',
    name: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];  // End bank_2


const App = () => {
  const [sound, setSound] = useState('');
  const [soundbank, setSoundbank] = useState(bank_1);
  const [volume, setVolume] = useState('0.5');

  const soundPlayed = sound => {
    setSound(sound);
  }

  const bankSelected = bank => {
    bank === 'bank_1' ? setSoundbank(bank_1) : setSoundbank(bank_2);
    setSound('');
  };

  return (
    <div className="container-fluid p-3 d-flex flex-column justify-content-between vh-100">
      <h1 className="text-center">Drum Machine</h1>
      <div id="drum-machine" className="rounded p-3 mx-auto">
        <Display sound={sound} />
        <DrumPads soundbank={soundbank} soundPlayed={soundPlayed} volume={volume} />
        <Toggle bankSelected={bankSelected} />
        <Volume volume={volume} setVolume={setVolume} />
      </div>
      <footer className="small">Created by Vivian S for <a href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-drum-machine" target="_blank" rel="noopener noreferrer">freeCodeCamp</a></footer>
    </div>
  );
};

export default App;
