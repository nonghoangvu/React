import { useEffect, useState } from "react";
//1. callBack away call when component mounted
function Content() {
    const [title, setTile] = useState('')
    useEffect(() => {
        document.title = title
    })
    return (
        <div>
            <input value={title} onChange={(e) => setTile(e.target.value)} />
        </div>
    )
}
export default Content