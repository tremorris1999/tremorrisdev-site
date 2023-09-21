import { component$ } from '@builder.io/qwik'
import { Link, type DocumentHead } from '@builder.io/qwik-city'
import SocialLink from '~/components/social-link'

import './style.css'
import GithubLangs from '~/components/github-langs'
import Carousel from '~/components/carousel'
import CarouselItem from '~/components/carousel-item'
import AccentPanel from '~/components/accent-panel'

export default component$(() => {
  return (
    <>
      <AccentPanel
        class='centered'
        style='color: white; font-size: 4rem;'
      >
        <h1 class='title'>Trevor Morris</h1>
        <p>Full-stack Engineer</p>
        <div class='social-icons'>
          <SocialLink
            img='/github-mark.svg'
            href='https://github.com/tremorris1999'
            width={50}
            height={45}
            filter='brightness(10000%)'
          />
          <SocialLink
            img='/In-White-128.png'
            href='https://www.linkedin.com/in/trevor-a-morris/'
            width={50}
            height={45}
          />
          <SocialLink
            img='/email.svg'
            href='mailto:tremorrisdev@gmail.com'
            width={50}
            height={45}
            filter='invert(1) brightness(10000%)'
          />
        </div>
        <div class='stats'>
          {/* username=tremorris1999&theme=neon&layout=donut&bg_color=0000006B&text_color=FFF&hide_border=true&border_radius=1rem */}
          <GithubLangs
            username='tremorris1999'
            theme='neon'
            layout='donut'
            bg_color='0000006B'
            text_color='FFF'
            hide_border='true'
            border_radius='1rem'
          />
        </div>
        <div class='actions'>
          <button>
            <Link
              href='/projects'
              class='link'
            >
              View Portfolio
            </Link>
          </button>
          <button>View Resume</button>
          <button>
            <Link
              href='/contact'
              class='link'
            >
              Contact Me
            </Link>
          </button>
        </div>
      </AccentPanel>
      <div class='container'>
        <h1>About Me</h1>
        <div class='bio'>
          <p>
            <i>
              I am a Spokane-based full-stack engineer with a insatiable desire
              to learn and expand my skillset, acquire new and interesting
              experiences, and relentlessly seek out new challenges.
            </i>
          </p>
          <p>
            I graduated in 2022 from Eastern Washington University where I
            received a B.S. in Computer Science with a Minor in Mathematics.
          </p>
          <p>
            Shortly following graduation, I began my career as a software
            engineer at Trans-System, Inc., a logistics and transport company
            based in Cheney, WA — where I quickly became a key member of the
            team by working on a variety of projects and technologies across the
            stack.
          </p>
          <div class='goals'>
            My career goals are simple:
            <br />
            <br />
            <b>Find new ways to learn and grow.</b>
            <br />
            <b>Encounter and overcome new challenges.</b>
            <br />
            <b>Seek out new viewpoints and perspectives.</b>
            <br />
            <b>Hone my teamwork and people-skills.</b>
          </div>
        </div>
      </div>
      <AccentPanel class='bottom'>
        <h1>Software Skills</h1>
        <div class='skills'>
          <Carousel
            height={300}
            interval={3000}
          >
            <CarouselItem>
              <div class='skill'>
                <i class='icon devicon-microsoftsqlserver-plain'></i>
                <br />
                <p>Microsoft SQL Server</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class='skill'>
                <i class='icon devicon-csharp-plain'></i>
                <br />
                <p>C#</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class='skill'>
                <i class='icon devicon-vuejs-plain'></i>
                <br />
                <p>Vue JS</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class='skill'>
                <i class='icon devicon-git-plain'></i>
                <br />
                <p>Git</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class='skill'>
                <i class='icon devicon-kotlin-plain'></i>
                <br />
                <p>Kotlin & Java</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class='skill'>
                <i class='icon devicon-nodejs-plain'></i>
                <br />
                <p>NodeJS</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class='skill'>
                <i class='icon devicon-rust-plain'></i>
                <br />
                <p>Rust</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class='skill'>
                <i class='icon devicon-typescript-plain'></i>
                <br />
                <p>TypeScript & JavaScript</p>
              </div>
            </CarouselItem>
          </Carousel>
        </div>
      </AccentPanel>
    </>
  )
})

export const head: DocumentHead = {
  title: 'Home | Trevor Morris',
  meta: [
    {
      name: 'description',
      content: "Home page for Trevor Morris's portfolio website.",
    },
  ],
}
