import './App.css';
import sentences from './sentences.json';
import QuoteBox from './components/QuoteBox';
import Button from './components/Button';
import { useState } from 'react';

function App() {

const [sentence, setSentence] = useState(sentences[indexRamdon(sentences.length)]);
const [background, setBackground] = useState(colorRamdon());

const nextSentence = () => {
  setSentence(sentences[indexRamdon(sentences.length)]);
  setBackground(colorRamdon());
 }

  return (
    <div className="App" style={{background}}>
      <div className='card' style={{color: background}}>
      <QuoteBox 
        author = {sentence.author}
        sentence = {sentence.quote}
      />
      <Button 
        background = {background}
        nextSentence = {nextSentence}
      />
      </div>
    </div>
  );
}

const indexRamdon = (max) => Math.floor(Math.random() * max)

const colorRamdon = () => {
  const colors = [
    "#275457", "#29776E", "#439A79",
    "#72BD7A", "#AFDD75", 
    "#275457", "#336476", "#537193",
    "#7F7BA6", "#AF84AC", "#D88FA6",
    "#275457", "#598689", "#FF8A44",
  ];
  return colors[indexRamdon(colors.length)];
}

export default App;
