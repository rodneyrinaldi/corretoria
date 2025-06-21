export interface Message {
  id: string
  content: string
  sender: 'user' | 'bot'
  timestamp: Date
  type?: 'text' | 'typing'
}

export interface ChatState {
  messages: Message[]
  isTyping: boolean
  inputValue: string
}

export interface User {
  id: string
  name: string
  avatar?: string
}