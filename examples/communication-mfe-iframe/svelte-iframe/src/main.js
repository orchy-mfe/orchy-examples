import './app.css'
import App from './App.svelte'

let app

const retrieveContainer = props => (props.container || document).querySelector('#app')

const render = (props = {}) => {
  app = new App({
    target: retrieveContainer(props),
    props
  })
}

render({})

export default app