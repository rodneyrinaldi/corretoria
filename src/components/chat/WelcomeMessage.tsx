interface WelcomeMessageProps {
  onSuggestionClick?: (suggestion: string) => void
}

export default function WelcomeMessage({ onSuggestionClick }: WelcomeMessageProps) {
  const suggestions = [
    {
      title: "Buscar imóveis disponíveis",
      desc: "Encontre casas e apartamentos que atendam suas necessidades"
    },
    {
      title: "Calcular financiamento imobiliário",
      desc: "Simule parcelas e condições de financiamento"
    },
    {
      title: "Agendar visitas a imóveis",
      desc: "Organize visitas aos imóveis de seu interesse"
    },
    {
      title: "Esclarecer dúvidas sobre documentação",
      desc: "Tire dúvidas sobre documentos necessários"
    }
  ]

  return (
    <div className="welcome-container">
      <h2 className="welcome-title">Olá, como posso ajudar?</h2>
      <p className="welcome-subtitle">
        Sou o Gemini Imobiliário, seu assistente especializado em imóveis. 
        Posso ajudar você a encontrar propriedades, calcular financiamentos e muito mais.
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