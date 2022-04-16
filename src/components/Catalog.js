import React from 'react'

import '../style/Catalog.css'

const Catalog = (props) => {
  return (
    <div className="catalog">
          <a href={props.catalogsInfo.link} target="_blank" rel="noopener noreferrer" className="catalog-a">{props.catalogsInfo.text}</a>
        </div>
  )
}

export default Catalog