import React from 'react'
import ReactDOM from 'react-dom/client'

function Input({ ...inputProps }) {
    return (
        <input {...inputProps} />
    )
}
function Header() {
    return (
        <React.Fragment>
            <h1>Header 1</h1>
            <h2>Header 2</h2>
            <h3>Header 3</h3>
        </React.Fragment>
    )
}
function App() {
    return (
        <div>
            <Header />
            <Input type='text' className='fullName' id='fullName' placeholder='Enter yout name' />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

