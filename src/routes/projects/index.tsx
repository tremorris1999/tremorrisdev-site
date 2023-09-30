import { component$ } from '@builder.io/qwik'

import type { DocumentHead } from '@builder.io/qwik-city'
import AccentPanel from '~/components/accent-panel'
import Carousel from '~/components/carousel'
import CarouselItem from '~/components/carousel-item'

import './style.css'
import ImgAdmin from '~/res/admin.svg?jsx'
import ImgShop from '~/res/shop.svg?jsx'
import ImgTractor from '~/res/tractor.svg?jsx'

export default component$(() => {
  return (
    <>
      <AccentPanel>
        <h1 class='page-title'>Projects</h1>
        <div class='project'>
          <div class='project-title text-center'>
            <h1>TSI AdminCenter</h1>
            <h3>(closed source)</h3>
            <ImgAdmin class='image' />
          </div>
          <div class='description'>
            <span>
              Service host and tooling provider for managing apps in
              Trans-System's managed Android devices.
            </span>
          </div>
          <div class='features text-center'>
            <h1>Features</h1>
            <br />
            <span>
              • Provide centralized authentication and identity service to all
              apps using an AIDL interface.
            </span>
            <br />
            <br />
            <span>
              • Implement offline HTTP request intercepting for re-sending
              requests when connectivity becomes available.
            </span>
            <br />
            <br />
            <span>
              • Maintain cache of data from server for offline use with varying
              lifetimes.
            </span>
            <br />
            <br />
            <span>
              • Centralize access to application-specific loggers for upload and
              analysis regardless of physical distance from the device.
            </span>
          </div>
          <Carousel
            height={300}
            interval={3000}
          >
            <CarouselItem>
              <div class='tech'>
                <i class='icon devicon-android-plain' />
                <br />
                <span>Android</span>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class='tech'>
                <i class='icon devicon-kotlin-plain' />
                <br />
                <span>Kotlin</span>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class='tech'>
                <i class='icon devicon-gradle-plain' />
                <br />
                <span>Gradle</span>
              </div>
            </CarouselItem>
          </Carousel>
        </div>
      </AccentPanel>
      <div class='container'>
        <div class='project'>
          <div class='project-title text-center'>
            <h1>ShopGen</h1>
            <h3>(archived)</h3>
            <ImgShop class='image' />
          </div>
          <div class='description'>
            <span>
              Shopping list app with a focus on recipe management and list
              generation. Archived due to maintenance time and hosting costs.
            </span>
          </div>
          <div
            class='btn'
            onClick$={() =>
              window.open('https://github.com/tremorris1999/shop-gen')
            }
          >
            View on Github
          </div>
          <div class='features text-center'>
            <h1>Features</h1>
            <br />
            <span>
              • Create recipes and manage an ingredient list for each recipe.
            </span>
            <br />
            <br />
            <span>
              • Share recipes with other users and save recipes from others.
            </span>
            <br />
            <br />
            <span>
              • Create a meal plan for a shopping trip and automatically
              generate a shopping list.
            </span>
          </div>
          <Carousel
            height={300}
            interval={3000}
          >
            <CarouselItem>
              <div class='tech'>
                <i class='icon devicon-vuejs-plain' />
                <br />
                <span>Vue 3</span>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class='tech'>
                <i class='icon devicon-vuetify-plain' />
                <br />
                <span>Vuetify 3</span>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class='tech'>
                <i class='icon devicon-typescript-plain' />
                <br />
                <span>Typescript</span>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class='tech'>
                <i class='icon devicon-microsoftsqlserver-plain' />
                <br />
                <span>MS SQL Server</span>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class='tech'>
                <i class='icon devicon-docker-plain' />
                <br />
                <span>Docker</span>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class='tech'>
                <i class='icon devicon-csharp-plain' />
                <br />
                <span>C#</span>
              </div>
            </CarouselItem>
          </Carousel>
        </div>
      </div>
      <AccentPanel>
        <div class='project'>
          <div class='project-title text-center'>
            <h1>TSI DriverPortal</h1>
            <ImgTractor class='image' />
          </div>
          <div class='description'>
            <span>
              Portal for TSI drivers to view pay stubs, view documents, view
              trip details, sign-up for programs and services, take courses,
              earn awards, and manage their work experience.
            </span>
          </div>
          <div
            class='btn'
            onClick$={() => window.open('https://driver.trans-system.com')}
          >
            View Site
          </div>
          <div class='features text-center'>
            <h1>Features</h1>
            <br />
            <span>
              • Document viewer for pay stubs, trip documents, and other
              documents.
            </span>
            <br />
            <br />
            <span>
              • Manage partner-based training documents, quizzes, and awards.
            </span>
            <br />
            <br />
            <span>
              • Allow drivers to sign-up for programs and services offered by
              Trans-System.
            </span>
            <br />
            <br />
            <span>
              • Facilitate driver learning through courses, quizzes, coaching,
              and manual intervention.
            </span>
          </div>
          <Carousel
            height={300}
            interval={3000}
          >
            <CarouselItem>
              <div class='tech'>
                <i class='icon devicon-vuejs-plain' />
                <br />
                <span>Vue 3</span>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class='tech'>
                <i class='icon devicon-vuetify-plain' />
                <br />
                <span>Vuetify 3</span>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class='tech'>
                <i class='icon devicon-typescript-plain' />
                <br />
                <span>Typescript</span>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class='tech'>
                <i class='icon devicon-microsoftsqlserver-plain' />
                <br />
                <span>MS SQL Server</span>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class='tech'>
                <i class='icon devicon-csharp-plain' />
                <br />
                <span>C#</span>
              </div>
            </CarouselItem>
          </Carousel>
        </div>
      </AccentPanel>
    </>
  )
})

export const head: DocumentHead = {
  title: 'Projects — Trevor Morris',
  meta: [
    {
      name: 'description',
      content: "Trevor Morris's projects page.",
    },
  ],
}
