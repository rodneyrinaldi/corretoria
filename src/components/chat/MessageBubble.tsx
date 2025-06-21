import { Message } from '@/types/chat'

interface MessageBubbleProps {
  message: Message
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.sender === 'user'

  return (
    <div className={`message-container ${isUser ? 'user' : 'bot'} animate-fade-in`}>
      <div className="message-content">
        <div className={`avatar ${isUser ? 'avatar-user' : 'avatar-bot'}`}>
          {isUser ? (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12 2C13.1046 2 14 2.89543 14 4V6H18C19.1046 6 20 6.89543 20 8V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V8C4 6.89543 4.89543 6 6 6H10V4C10 2.89543 10.8954 2 12 2ZM8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10ZM16 10C15.4477 10 15 10.4477 15 11C15 11.5523 15.4477 12 16 12C16.5523 12 17 11.5523 17 11C17 10.4477 16.5523 10 16 10ZM8 14H16V16H8V14Z"/>
            </svg>
          )}
        </div>
        <div className={`message-bubble ${isUser ? 'message-user' : 'message-bot'}`}>
          <p>{message.content}</p>
          <div className="message-timestamp">
            {message.timestamp.toLocaleTimeString('pt-BR', { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </div>
        </div>
      </div>
    </div>
  )
}