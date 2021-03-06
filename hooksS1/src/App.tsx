import React from 'react'
import { Store } from './Store'
import './index.css'
import { Link } from '@reach/router'

const App = (props: any): JSX.Element => {
    const { state } = React.useContext(Store)

    console.log('state -', state)

    return (
        <>
            <header className="header">
                <div>
                    <h2>Main news von ImFootball</h2>
                    <p> Pick your favourite News!</p>
                </div>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/faves">{`Number of favourites: ${state.favourites.length}`}</Link>
                </div>
            </header>
            {props.children}
        </>
    )
}

export default React.memo(App)
