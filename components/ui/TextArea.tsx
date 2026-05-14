import React from "react";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export default function TextArea({
  label,
  error,
  helperText,
  className = "",
  ...props
}: TextAreaProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-foreground mb-2">
          {label}
        </label>
      )}
      <textarea
        className={`
          w-full px-4 py-2.5 rounded-lg border-2 border-neutral-200
          focus:border-primary-light focus:outline-none focus:ring-0
          transition-colors duration-200
          placeholder:text-neutral-400
          resize-vertical min-h-[120px]
          ${error ? "border-red-500" : ""}
          ${className}
        `}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      {helperText && !error && (
        <p className="text-neutral-500 text-sm mt-1">{helperText}</p>
      )}
    </div>
  );
}
