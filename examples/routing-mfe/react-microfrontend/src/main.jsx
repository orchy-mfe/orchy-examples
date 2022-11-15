import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import './index.css'

import OrchyMicroFrontend from '@orchy-mfe/spa-adapter'
export class ReactMfe extends OrchyMicroFrontend {
  async mount(microFrontendProperties) {
    this.root = createRoot(this.getContainer())
    this.root.render(
      <StrictMode>
        <BrowserRouter basename={microFrontendProperties?.basePath}>
          <App {...microFrontendProperties} />
        </BrowserRouter>
      </StrictMode>
    )
  }

  async unmount() {
    this.root?.unmount()
  }
}

customElements.define('react-routing-mfe', ReactMfe)