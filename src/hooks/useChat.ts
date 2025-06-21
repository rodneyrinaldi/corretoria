'use client'

import { useState, useCallback } from 'react'
import { Message } from '@/types/chat'
import { mockBotResponses } from '@/data/mockMessages'

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)

  const sendMessage = useCallback(async (content: string) => {
    // Adicionar mensagem do usuário
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setIsTyping(true)

    // Simular resposta do bot
    setTimeout(() => {
      const botResponse = mockBotResponses[Math.floor(Math.random() * mockBotResponses.length)]
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 2000) // 1-3 segundos
  }, [])

  return {
    messages,
    isTyping,
    sendMessage
  }
}