import { component$ } from '@builder.io/qwik'

interface GithubLangs {
  username?: string
  theme?: string
  layout?: string
  bg_color?: string
  text_color?: string
  hide_border?: string
  border_radius?: string
}

const base_url = 'https://github-readme-stats.vercel.app/api/top-langs/?'

const getParams = (props: GithubLangs) =>
  Object.keys(props).map(
    k => `${k}=${(props as { [index: string]: string })[k]}`
  )

export default component$((props: GithubLangs) => {
  return (
    <>
      <img
        src={`${base_url}${getParams(props).join('&')}`}
        width='500'
        height='300'
      ></img>
    </>
  )
})
