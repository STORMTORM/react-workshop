import './FlashCard.css';

function FlashCard({ question, answer }) {
    return (
        <div className='flashcard-box'>
            <div className="flashcard">
                <div className="question">
                    <p>{question}</p>
                </div>
                <div className="answer">
                    <p>{answer}</p> 
                </div>
            </div>
        </div>
        
    );  
}

export default FlashCard;