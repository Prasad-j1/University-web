import './Video.css';
import video from '..//..//assets//college-video-6XtGR-D3.mp4';
import { useRef } from 'react';


const Video=({videoplay, setvideoplay})=>{


    const player=useRef();

    const closePlayer=(e)=>{
        if(e.target==player.current){
            setvideoplay(false);
        }
    }



    return(
        <div className={`video-player ${!videoplay ? 'hide' :''}`} ref={player} onClick={closePlayer}>
            <video src={video} autoPlay muted controls ></video>
        </div>
    );
}

export default Video;