import React from 'react'
import ReactDOM from 'react-dom/client'
import {jsx as _jsx} from 'react/jsx-runtime'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App | Mid</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank',
//     },
//     children: 'Click me to visit google',
// }

const anotherElement = (
    <a href="https://google.com" target='_blanck'>Visit google</a>
)

const anotherUser = "Midnight Runr"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank' },
    'click me to visit google',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).
render(

    reactElement
)
