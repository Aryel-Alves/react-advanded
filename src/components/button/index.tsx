import React from 'react'

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export function Button ({ backgroundColor, label, ...props } : ButtonProps){

  React.useEffect(() => {
    console.log("FUNÇÃO ONCLICK MUDOU NO BOTÃO")
  }, [props.onClick])

  return (
    <button 
      type="button"
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  )
    
}