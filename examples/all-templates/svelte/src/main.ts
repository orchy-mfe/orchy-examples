import './app.css'
import App from './App.svelte'

import OrchyMicroFrontend from '@orchy-mfe/spa-adapter'
import type {MicroFrontendProperties} from '@orchy-mfe/models'
export class SvelteMfeTypeScript extends OrchyMicroFrontend {
  private app: App
  async mount(microFrontendProperties: MicroFrontendProperties) {
    this.app = new App({
      target: this.getContainer(),
      props: microFrontendProperties
    })
  }

  async unmount() {
    this.app.$destroy()
  }
}

customElements.define('svelte-mfe-typescript', SvelteMfeTypeScript)