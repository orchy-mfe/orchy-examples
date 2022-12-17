import {render} from 'preact'
import {BrowserRouter} from 'react-router-dom'
import {App} from './app'
import './index.css'

import OrchyMicroFrontend from '@orchy-mfe/spa-adapter'
import {MicroFrontendProperties} from '@orchy-mfe/models'

export class PreactMfeTypeScript extends OrchyMicroFrontend {
    async mount(microFrontendProperties: MicroFrontendProperties) {
        render(
            <BrowserRouter basename={microFrontendProperties?.basePath}>
                <App />,
            </BrowserRouter>,
            this.getContainer()
        )
    }

    async unmount() {
        render(null, this.getContainer())
    }
}

customElements.define('preact-mfe-typescript', PreactMfeTypeScript)

