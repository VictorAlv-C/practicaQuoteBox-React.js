import './App.css';
import frases from './frases.json';
import QuoteBox from './components/QuoteBox';
import { useState } from 'react';

function App() {

 const [frase, setFrase] = useState(frases[indexRamdon(frases.length)]);

const [background, setBackground] = useState(colorRamdon());

const nextFrase = () => {
  setFrase(frases[indexRamdon(frases.length)]);
  setBackground(colorRamdon());
 }

  return (
    <div className="App" style={{background}}>
    
      <QuoteBox 
        autor = {frase.author}
        frase = {frase.quote}
        next = {nextFrase}
        background = {background}
      />
    </div>
  );
}

const indexRamdon = (max) => Math.floor(Math.random() * max)

const colorRamdon = () => {
  const colores = [
    "#275457", "#29776E", "#439A79",
    "#72BD7A", "#AFDD75", 
    "#275457", "#336476", "#537193",
    "#7F7BA6", "#AF84AC", "#D88FA6",
    "#275457", "#598689", "#FF8A44",
  ];
  return colores[indexRamdon(colores.length)];
}

export default App;
