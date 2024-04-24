import { useState, useEffect } from "react";
//useEffect(callBack, []) -- [] only callBack component mounted

//useEffect(callBack, [deps]) -- [deps] callBack call when deps change

//useLayoutEffect fix flast when reload

//memo reload component when not need

const tabs = ['posts', 'comments', 'albums']
function Content() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [showToTop, setShowToTop] = useState(false)
    const [avatar, setAvatar] = useState()
    const [type, setType] = useState('posts')
    useEffect(() => {
        document.title = title
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(resp => resp.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            // console.log(window.scrollY); //Get scroll y
            if (window.scrollY >= 200) {
                //Show
                setShowToTop(true)
            } else {
                //Hide
                setShowToTop(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        //Cleanup function call when unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    //Cleanup avatar
    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }

    return (
        <div>
            <h1>Open API</h1>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            {tabs.map(item => (
                <button key={item} style={type === item ? { color: '#fff', background: '#333' } : {}} onClick={() => setType(item)}>{item}</button>
            ))}
            <input
                type="file"
                onChange={handlePreviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} alt="" width="80%" />
            )}

            <ul>
                {posts.map(item => (
                    <li key={item.id}>{item.title || item.name}</li>
                ))}
            </ul>

            {showToTop && <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }} style={{ position: 'fixed', right: 20, bottom: 20 }}>Go to top</button>}
        </div>
    )
}
export default Content