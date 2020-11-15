const DrumPads = ( {sound_bank, soundPlayed} ) => {
  const clickHandler = evt => {
    soundPlayed(evt.target.dataset.name);
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
