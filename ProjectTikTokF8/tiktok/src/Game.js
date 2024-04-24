import { useState } from "react";

const gifts = ['$2', '$1000', '$500']
function App() {
    const [gift, setGift] = useState()
    const randomGift = () => {
        let index = Math.floor(Math.random() * gifts.length)
        setGift(gifts[index])
    }
    return (
        <div className="App">
            <h1>{gift || 'Not gift!'}</h1>
            <button onClick={randomGift}>Get gift</button>
        </div >
    );
}

export default App;
