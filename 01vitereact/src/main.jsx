import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App | Peeyush</h1>
    </div>
  )
}
// const ReactElement = {
//   type: "a",
//   props: {
//       href: "http://google.com",
//       target: "_blank"
//   },
//   children: "Click me to visit google"
// }

const anotherElement = (
  <a href="http://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "Ankur Pandey"

const reactElement = React.createElement(
  'a',
{href: 'http://google.com',
target: '_blank'},
'Click me to visit google' ,
anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)
