'use client'

import ChatHeader from './ChatHeader'
import ChatMessages from './ChatMessages'
import ChatInput from './ChatInput'
import { useChat } from '@/hooks/useChat'

// Sem interface vazia - usar diretamente
export default function ChatContainer() {
  const { messages, isTyping, sendMessage } = useChat()

  return (
    <div className="chat-container">
      <ChatHeader />
      <ChatMessages messages={messages} isTyping={isTyping} />
      <ChatInput onSendMessage={sendMessage} />
    </div>
  )
}