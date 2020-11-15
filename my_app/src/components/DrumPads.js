const DrumPads = ( {sound_bank} ) => {
  const pads = sound_bank.map((sound, i) => {
    return (
      <button key={i} id={sound.id} className="drum-pad" data-key={sound.letter}>
        <audio id={sound.letter} className="clip" src={sound.url}></audio>
        {sound.letter}
      </button>
    );
  });  // End pads

  return <div id="pads_container">{pads}</div>
};

export default DrumPads;
