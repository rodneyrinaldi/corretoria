interface WelcomeMessageProps {
  onSuggestionClick?: (suggestion: string) => void
}

export default function WelcomeMessage({ onSuggestionClick }: WelcomeMessageProps) {
  const suggestions = [
    {
      title: "Buscar imóveis",
      desc: "Encontre casas e apartamentos que atendam suas necessidades"
    },
    {
      title: "Cadastrar imóveis",
      desc: "Disponibilize casas e apartamentos para vendas ou locações"
    }
  ]

  return (
    <div className="welcome-container">
      <h2 className="welcome-title">Olá, como posso ajudar?</h2>
      <p className="welcome-subtitle">
        Sou a sua inteligência artificial imobiliária.
      </p>
      
      <div className="welcome-suggestions">
        {suggestions.map((suggestion, index) => (
          <div 
            key={index}
            className="suggestion-card"
            onClick={() => onSuggestionClick?.(suggestion.title)}
          >
            <div className="suggestion-title">{suggestion.title}</div>
            <div className="suggestion-desc">{suggestion.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}