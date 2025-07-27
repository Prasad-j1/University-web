import "./Testimonials.css"

// next and back icons
import next_icon from "..//..//assets/next-icon.png"
import back_icon from "..//..//assets/back-icon.png"


//user icon
import user_1 from "..//..//assets/user-1.png"
import user_2 from "..//..//assets/user-2.png"
import user_3 from "..//..//assets/user-3.png"
import user_4 from "..//..//assets/user-4.png"
import { useRef } from "react"


const Testimonials=()=>{

    const slider=useRef(); 
    let tx=0;

    const slideForward=()=>{
        if(tx>-50){
            tx-=25
        }

        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward=()=>{

        if(tx < 0){
            tx+=25
        }
         slider.current.style.transform = `translateX(${tx}%)`
    }






    return(
        <>
            <div className="testimonials">
                    <img src={next_icon} className="next-icon" onClick={slideForward}/>
                    <img src={back_icon} className="back-icon" onClick={slideBackward}/>

                <div className="slider">

                    <ul ref={slider}>
                        <li>
                            <div className="slide">
                                <div className="info">
                                    <img src={user_1} alt="" />
                                    <div>
                                        <h3>Rupali Chaudhary</h3>
                                        <span>Edusity, Jaipur</span>
                                    </div>
                                </div>

                                <p>Choosing to pursue my degree at Edusity
                                     was one of the best decisions I've ever made. 
                                     The supportive community, state-of-the-art facilities, 
                                     and commitment to academic excellence have 
                                     truly exceeded my expectations.</p>
                            </div>
                        </li>



                        <li>
                            <div className="slide">
                                <div className="info">
                                    <img src={user_2} alt="" />
                                    <div>
                                        <h3>Omkar Ahire</h3>
                                        <span>Edusity, Pune</span>
                                    </div>
                                </div>

                                <p>Choosing to pursue my degree at Edusity
                                     was one of the best decisions I've ever made. 
                                     The supportive community, state-of-the-art facilities, 
                                     and commitment to academic excellence have 
                                     truly exceeded my expectations.</p>
                            </div>
                        </li>




                        <li>
                            <div className="slide">
                                <div className="info">
                                    <img src={user_3} alt="" />
                                    <div>
                                        <h3>Sukanya Marathe</h3>
                                        <span>Edusity, Delhi</span>
                                    </div>
                                </div>

                                <p>Choosing to pursue my degree at Edusity
                                     was one of the best decisions I've ever made. 
                                     The supportive community, state-of-the-art facilities, 
                                     and commitment to academic excellence have 
                                     truly exceeded my expectations.</p>
                            </div>
                        </li>




                        <li>
                            <div className="slide">
                                <div className="info">
                                    <img src={user_4} alt="" />
                                    <div>
                                        <h3>Emily Williams</h3>
                                        <span>Edusity, Mumbai</span>
                                    </div>
                                </div>

                                <p>Choosing to pursue my degree at Edusity
                                     was one of the best decisions I've ever made. 
                                     The supportive community, state-of-the-art facilities, 
                                     and commitment to academic excellence have 
                                     truly exceeded my expectations.</p>
                            </div>
                        </li>



                    </ul>
                </div>
            </div>
        </>
    );
}
export default Testimonials;