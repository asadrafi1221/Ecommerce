import React from 'react'

function Button({text,className,onClick}) {
  return (
    
        <button className={`px-4 py-3 text-sm ${className} bg-orange text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]`} onClick={onClick}>
          {text}
        </button>
  )
}

export default Button