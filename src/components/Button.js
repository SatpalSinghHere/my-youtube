import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className="px-2 py-1 my-2 mx-1 text-xs bg-slate-200 rounded-lg hover:bg-slate-300 text-nowrap">{name}</button>
    </div>
  )
}

export default Button
