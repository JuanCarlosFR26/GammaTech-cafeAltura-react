import React from 'react'
import { Link } from 'react-router-dom'

const LinkIcon = ({className, styleLink, styleIcon, text, to, element }) => {
  return (
    <div className={className}>
        <Link className={styleLink} to={to} element={element}>
          {text}
        </Link>
        <i className={styleIcon}></i>
      </div>
  )
}

export default LinkIcon