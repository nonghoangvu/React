import video1 from './videos/tiktok.mp4';
import { forwardRef, useImperativeHandle, useRef } from 'react';

function Video(props, ref) {
    const videoRef = useRef()
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))
    return (
        <video ref={videoRef} width={300} src={video1} />
    )
}
export default forwardRef(Video)