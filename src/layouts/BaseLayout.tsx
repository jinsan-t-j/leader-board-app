import type { FC } from 'react'
import { Outlet } from 'react-router-dom'

/**
 * The base layout for the application.
 *
 * @returns The base JSX layout.
 */
export const BaseLayout: FC = () => {
    return (
        <div className='container m-auto'>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
