import { memo } from "react";
function Navbar() {
    console.log('Opening...');
    return (
        <div>
            <h1>Open navbar</h1>
        </div>
    )
}
export default memo(Navbar)