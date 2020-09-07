import './Card.scss'

import React from 'react'

interface CardProps {
  url: string
}

export const Card: React.FunctionComponent<CardProps> = ({
  url,
}: CardProps) => {
  return (
    <figure className="Card">
      <img className="Card-image" src={url} alt="card" loading="lazy" />
    </figure>
  )
}
