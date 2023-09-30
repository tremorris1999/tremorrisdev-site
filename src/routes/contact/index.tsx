import { component$ } from '@builder.io/qwik'
import AccentPanel from '~/components/accent-panel'

import type { DocumentHead } from '@builder.io/qwik-city'

import './style.css'

export default component$(() => {
  return (
    <>
      <AccentPanel>
        <h1 class='page-title'>Contact</h1>
        <div class='root'>
          <p>
            If you'd like to reach out about my services or to collaborate,
            please email me directly, or reach out to me on LinkedIn.
          </p>
          <div
            class='btn'
            onClick$={() => window.open('mailto:tremorrisdev@gmail.com')}
          >
            Email
          </div>
          <div
            class='btn'
            onClick$={() =>
              window.open('https://www.linkedin.com/in/trevor-a-morris/')
            }
          >
            LinkedIn
          </div>
          <div
            class='btn'
            onClick$={() => window.location.assign('/')}
          >
            Return to Home
          </div>
        </div>
      </AccentPanel>
    </>
  )
})

export const head: DocumentHead = {
  title: 'Contact — Trevor Morris',
  meta: [
    {
      name: 'description',
      content: "Trevor Morris's contact page.",
    },
  ],
}
