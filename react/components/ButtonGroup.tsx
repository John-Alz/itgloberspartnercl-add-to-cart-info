import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

const ButtonGroup = () => {

  const CSS_HANDLES = ['container__buttons', 'link', 'link__two', 'link__three']
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={handles.container__buttons}>
    <div>
      <a href="/" className={handles.link}>
        CHECK OUT
      </a>
    </div>
    <div>
      <a href="/" className={handles.link__two}>
        Continuar comprando
      </a>
      <a href="/cart" className={handles.link__three}>
        Ir al carrito
      </a>
    </div>
  </div>
  )
}

export default ButtonGroup
