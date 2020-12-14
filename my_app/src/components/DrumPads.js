import { useEffect } from 'react';

const DrumPads = ( {sound_bank, soundPlayed} ) => {
  useEffect(() => {
    window.addEventListener('keydown', evt => {
      let key = evt.key.toUpperCase();

      if (key === 'Q' || key === 'W' || key === 'E' || key === 'A' || key === 'S' || key === 'D' || key === 'Z' || key === 'X' || key === 'C') {
        let button = document.querySelector(`[data-key=${key}]`);
        button.click();
      }
    });  // End keydown event
  }, []);  // End useEffect

  const clickHandler = evt => {
    soundPlayed(evt.target.dataset.name);

    let audio = evt.target.children[0];
    audio.play();
    audio.currentTime = 0;
  }

  const pads = sound_bank.map((sound, i) => {
    return (
      <button key={i} id={sound.id} className="drum-pad" data-key={sound.letter} data-name={sound.name} onClick={clickHandler}>
        <audio id={sound.letter} className="clip" src={sound.url}></audio>
        {sound.letter}
      </button>
    );
  });  // End pads

  return <div id="pads_container">{pads}</div>
};

export default DrumPads;
