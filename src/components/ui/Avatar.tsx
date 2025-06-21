interface AvatarProps {
  src: string
  alt: string
  size?: 'sm' | 'md' | 'lg'
}

export default function Avatar({ src, alt, size = 'md' }: AvatarProps) {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <div className={`${sizes[size]} rounded-full bg-gray-200 flex items-center justify-center overflow-hidden`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  )
}