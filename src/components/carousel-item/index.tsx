import { Slot, component$, useContext } from '@builder.io/qwik'
import { carouselContext } from '../carousel'

import './style.css'

export default component$(() => {
  useContext(carouselContext)

  return (
    <div class='carousel__item'>
      <Slot />
    </div>
  )
})
