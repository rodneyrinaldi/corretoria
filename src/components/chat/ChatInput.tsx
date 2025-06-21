'use client'

import { useState, KeyboardEvent, useRef, useEffect } from 'react'

interface ChatInputProps {
  onSendMessage: (message: string) => void
}

export default function ChatInput({ onSendMessage }: ChatInputProps) {
  const [inputValue, setInputValue] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue.trim())
      setInputValue('')
      resetTextareaHeight()
      textareaRef.current?.focus()
    }
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const resetTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '24px'
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value)
    
    // Auto-resize
    const textarea = e.target
    textarea.style.height = '24px'
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px'
  }

  useEffect(() => {
    resetTextareaHeight()
  }, [])

  return (
    <div className="chat-input-container">
      <div className="chat-input-wrapper">
        <label htmlFor="message-input" className="sr-only">
          Digite sua mensagem
        </label>
        <textarea
          id="message-input"
          ref={textareaRef}
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Digite uma mensagem para o CorretorIA"
          className="chat-input"
          maxLength={2000}
          rows={1}
        />
        <button 
          onClick={handleSend}
          disabled={!inputValue.trim()}
          className="send-button"
          aria-label="Enviar mensagem"
          title="Enviar mensagem"
          type="button"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
        </button>
      </div>
    </div>
  )
}