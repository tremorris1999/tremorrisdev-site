import { Slot, component$ } from '@builder.io/qwik'
import './style.css'

interface AccentPanelProps {
  class?: string
  style?: string
}

export default component$((props: AccentPanelProps) => {
  return (
    <div
      class={`accent-panel ${props.class || ''}`}
      style={props.style || ''}
    >
      <Slot />
    </div>
  )
})
