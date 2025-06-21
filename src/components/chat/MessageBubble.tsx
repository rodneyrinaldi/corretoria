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
            'U'
          ) : (
            'G'
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