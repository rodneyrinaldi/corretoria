export default function TypingIndicator() {
  return (
    <div className="typing-container animate-fade-in">
      <div className="typing-content">
        <div className="avatar avatar-bot">
          G
        </div>
        <div className="typing-dots">
          <span className="typing-text">Gemini está digitando</span>
          <div className="typing-dot"></div>
          <div className="typing-dot"></div>
          <div className="typing-dot"></div>
        </div>
      </div>
    </div>
  )
}