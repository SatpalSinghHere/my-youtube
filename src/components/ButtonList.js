import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className="flex m-b">
      <Button name={"All"} />
      <Button name={"Music"} />
      <Button name={"Gaming"} />
      <Button name={"Mixes"} />
      <Button name={"Science Fictions"} />
      <Button name={"Art music"} />
      <Button name={"Trailers"} />
      <Button name={"Music Arrangements"} />
      <Button name={"Orchestra"} />
    </div>
  )
}

export default ButtonList
