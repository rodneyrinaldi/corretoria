export interface Message {
  id: string
  content: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export interface ChatState {
  messages: Message[]
  isTyping: boolean
}

// Se houver interfaces vazias, adicione pelo menos uma propriedade ou use type
export type EmptyProps = Record<string, never>

// Ou se for uma interface que pode ser estendida no futuro:
export interface BaseProps {
  className?: string
}