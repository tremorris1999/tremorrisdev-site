import {
  Slot,
  component$,
  createContextId,
  useContextProvider,
  useSignal,
  useStore,
  useVisibleTask$,
  $,
} from '@builder.io/qwik'

interface CarouselProps {
  height?: number
  interval?: number
}

export interface CarouselContext {
  childCount: number
  current: number
  interval?: any // NodeJS.Timeout
}

export const carouselContext =
  createContextId<CarouselContext>('carousel-children')

import './style.css'

export default component$((props: CarouselProps) => {
  const track = useSignal<HTMLDivElement>()
  const store = useStore<CarouselContext>({
    childCount: 0,
    current: 0,
    interval: undefined,
  })

  useContextProvider(carouselContext, store)

  const intervalFn = $(() => {
    store.current = (store.current + 1) % store.childCount
    if (track.value) {
      const target = track.value.children[store.current] as HTMLElement
      track.value.scrollLeft = target.offsetLeft || 0
    }
  })

  useVisibleTask$(({ track: t }) => {
    const count = t(() => track.value?.children.length)
    store.childCount = count || 0
    store.interval = setInterval(intervalFn, props.interval || 5000)
  })

  return (
    <div class='carousel__root'>
      <div
        class='carousel__track'
        ref={track}
        style={`height: ${props.height || 150}px`}
      >
        <Slot />
      </div>
      <div class='carousel__controls'>
        {Array.from({ length: store.childCount }).map((_, i) => (
          <span
            key={i}
            onClick$={() => {
              store.current = i
              track.value?.children[i].scrollIntoView({ behavior: 'smooth' })
              store.interval && clearInterval(store.interval)
              store.interval = setInterval(intervalFn, 5000)
            }}
          >
            {' '}
            {store.current === i ? '⦿' : '•'}{' '}
          </span>
        ))}
      </div>
    </div>
  )
})
