import * as Tone from "tone";
import seedrandom from "seedrandom";

const SCALES = [
  ["C4", "D4", "E4", "G4", "A4", "C5"],
  ["D4", "F4", "G4", "A4", "C5", "D5"],
  ["E4", "G4", "A4", "B4", "D5", "E5"],
  ["A3", "C4", "D4", "E4", "G4", "A4"],
];

const BASS_NOTES = ["C2", "A1", "F1", "G1"];

const SYNTHS = [Tone.Synth, Tone.FMSynth, Tone.AMSynth];

const writeText = (view, offset, text) => {
  [...text].forEach((char, index) => {
    view.setUint8(offset + index, char.charCodeAt(0));
  });
};

const convertToWav = (buffer) => {
  const audio = buffer.get();

  const samples = audio.getChannelData(0);

  const wav = new ArrayBuffer(44 + samples.length * 2);

  const view = new DataView(wav);

  writeText(view, 0, "RIFF");
  view.setUint32(4, 36 + samples.length * 2, true);

  writeText(view, 8, "WAVE");

  writeText(view, 12, "fmt ");

  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);

  view.setUint32(24, audio.sampleRate, true);

  view.setUint32(28, audio.sampleRate * 2, true);

  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);

  writeText(view, 36, "data");

  view.setUint32(40, samples.length * 2, true);

  let offset = 44;

  samples.forEach((sample) => {
    const value = Math.max(-1, Math.min(1, sample));

    view.setInt16(offset, value < 0 ? value * 0x8000 : value * 0x7fff, true);

    offset += 2;
  });

  return new Blob([wav], { type: "audio/wav" });
};

const createSong = (rng, duration) => {
  const scale = SCALES[Math.floor(rng() * SCALES.length)];

  const Synth = SYNTHS[Math.floor(rng() * SYNTHS.length)];

  const melody = new Synth().toDestination();

  const bass = new Tone.Synth({
    oscillator: {
      type: "triangle",
    },
  }).toDestination();

  let time = 0;

  while (time < duration) {
    const note = scale[Math.floor(rng() * scale.length)];

    melody.triggerAttackRelease(note, rng() > 0.5 ? "8n" : "4n", time);

    time += 0.3 + rng();
  }

  for (let second = 0; second < duration; second += 2) {
    bass.triggerAttackRelease(
      BASS_NOTES[Math.floor(rng() * BASS_NOTES.length)],
      "2n",
      second,
    );
  }
};

const generateMusic = async (songName, artist) => {
  const random = seedrandom(`${songName}-${artist}`);

  const duration = 8 + Math.floor(random() * 12);

  const audioBuffer = await Tone.Offline(() => {
    createSong(random, duration);
  }, duration);

  const wav = convertToWav(audioBuffer);

  return URL.createObjectURL(wav);
};

export default generateMusic;
