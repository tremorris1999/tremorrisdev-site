import { component$ } from '@builder.io/qwik'

import './style.css'

interface SocialLinkProps {
  href: string
  img: string
  height?: number | `${number}`
  width?: number | `${number}`
  class?: string
  filter?: string
}

export default component$((props: SocialLinkProps) => {
  return (
    <div
      class={`social-link ${props.class || ''}`}
      onClick$={() => window.open(props.href)}
    >
      <img
        class='social-link__img'
        style={`filter: ${props.filter || 'none'}`}
        src={props.img}
        width={props.width || 100}
        height={props.height || 100}
      />
    </div>
  )
})
