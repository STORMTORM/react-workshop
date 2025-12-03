import './FlashCardForm.css';

function FlashCardForm({ onAddFlashcard }) {
    return (
        <form className="flashcard-form">
            <label>Question</label>
            <input type="text" name="question" />

            <label>Answer</label>
            <input type="text" name="answer" />

            <button type="submit">Add Flashcard</button>
        </form>
    );
}

export default FlashCardForm;