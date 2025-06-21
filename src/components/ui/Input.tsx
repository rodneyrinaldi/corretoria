import { forwardRef, InputHTMLAttributes } from 'react'

// Usar type ao invés de interface vazia
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  label?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', error, label, type = 'text', ...props }, ref) => {
    const baseClasses = `
      w-full
      px-3
      py-2
      border
      border-gray-300
      rounded-md
      shadow-sm
      placeholder-gray-400
      focus:outline-none
      focus:ring-2
      focus:ring-blue-500
      focus:border-blue-500
      disabled:bg-gray-50
      disabled:text-gray-500
      disabled:cursor-not-allowed
      ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}
      ${className}
    `.trim()

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <input
          ref={ref}
          type={type}
          className={baseClasses}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input