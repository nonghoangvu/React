import { useState } from "react";

const gender = [
    {
        id: 1,
        value: 'Male'
    },
    {
        id: 2,
        value: 'Female'
    },
]

const langs = [
    {
        id: 1,
        title: 'Java'
    }, {
        id: 2,
        title: 'JavaScript'
    }, {
        id: 3,
        title: 'HTM, CSS'
    }
]

function App() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [checked, setChecked] = useState()
    const [selected, setSelected] = useState([])
    console.log(selected);
    const handleSubmit = () => {
        console.log({ name, email });
    }
    const handleSelect = (id) => {
        setSelected(prev => {
            const isSelected = selected.includes(id)
            if (isSelected) {
                return selected.filter(item => item !== id)
            } else {
                return [...prev, id]
            }
        })
    }
    return (
        <div className="App">
            <input
                value={name}
                placeholder="Full name"
                onChange={e => setName(e.target.value)}
            />
            <input
                value={email}
                placeholder="Email"
                onChange={e => setEmail(e.target.value)}
            />
            <hr />
            {gender.map(g => (
                <div key={g.id}>
                    <input type="radio" checked={checked === g.id} onChange={() => { setChecked(g.id) }} />
                    {g.value}
                </div>
            ))}
            <hr />
            {langs.map(langue => (
                <div key={langue.id}>
                    <input type="checkBox" selected={selected.includes(langue.id)} onChange={() => handleSelect(langue.id)} />
                    {langue.title}
                </div>
            ))}
            <button onClick={handleSubmit}>Register</button>
        </div >
    );
}

export default App;
