export default function ChatHeader() {
  return (
    <header className="chat-header">
      <div className="logo">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M12 3L2 12h3v9h14v-9h3L12 3z"/>
          <text x="12" y="16" font-family="Arial, sans-serif" font-size="8" font-weight="bold" text-anchor="middle" alignment-baseline="middle" fill="black">IA</text>
        </svg>
      </div>
      <div>
        <h1>CorretorIA</h1>
        <p>Especialista em imóveis • Online</p>
      </div>
    </header>
  )
}