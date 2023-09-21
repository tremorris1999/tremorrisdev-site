import { component$, Slot, useComputed$ } from '@builder.io/qwik'
import { Link, type RequestHandler, useLocation } from '@builder.io/qwik-city'

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  })
}

export default component$(() => {
  const location = useLocation()
  const activeLink = useComputed$(() => location.url.pathname)

  return (
    <>
      <div class='app-bar'>
        <div class='app-title'>
          <span class='cmd'>{'>'}</span>
          <div class='typing'>
            <span class='name'>Trevor Morris</span>
          </div>
        </div>
        <div class='app-nav-links'>
          <Link
            class={/^\/$/.test(activeLink.value) ? 'active first' : 'first'}
            href='/'
          >
            Home
          </Link>
          <Link
            class={/\/projects\//.test(activeLink.value) ? 'active' : ''}
            href='/projects'
          >
            Projects
          </Link>
          <Link
            class={
              /\/contact\//.test(activeLink.value) ? 'active last' : 'last'
            }
            href='/contact'
          >
            Contact
          </Link>
        </div>
      </div>
      <div class='app-content'>
        <Slot />
      </div>
      <div class='app-footer'>© 2023 Trevor Morris. All rights reserved.</div>
    </>
  )
})
