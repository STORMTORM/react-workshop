import { useState } from 'react'
import './App.css'
import FlashCardForm from './components/FlashCardForm';
import FlashCard from './components/FlashCard';

function App() {

  function handleAddFlashcard() {
    // to add a new flashcard
  }

  function deleteFlashcard(id) {
    // to delete a flashcard
  }

  return (
    <div>
      <h1>Flashcard App</h1>

      <FlashCardForm onAddFlashcard={handleAddFlashcard} />

      <div className='flashcard-container'>
        <FlashCard question="What is React?" answer="A JavaScript library for building user interfaces." />
        <FlashCard question="What is a component?" answer="Reusable building blocks in React." />
        <FlashCard question="What is state?" answer="An object that determines the behavior of a component." />
        <FlashCard question="What are props?" answer="Inputs to components that allow data to be passed." />
        <FlashCard question="What is JSX?" answer="A syntax extension for JavaScript that looks like HTML." />

      </div>
    </div>
  );
}

export default App
