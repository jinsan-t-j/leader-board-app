import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { SupabaseProvider } from './Provider/SupabaseProvider'
import { store } from './store'
import { App } from './App'
import './assets/sass/index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <SupabaseProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </SupabaseProvider>
    </React.StrictMode>,
)
