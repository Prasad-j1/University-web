import React, { useEffect, useState } from "react";
import "./Navbar.css"
import logo from "../../assets/logo.png"
import { Link } from 'react-scroll';

const Navbar=()=>{

    // it will handel the scroll animation bg-blue for navbar when we scroll down
   const [sticky, setSticky] = useState(false);

        useEffect(() => {
        const handleScroll = () => {
            // calculate in px
            setSticky(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        }, []);


    return(
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="" className="logo"/>

            <ul><li>
                     <Link 
                        to="hero" 
                        smooth={true} 
                        offset={0} 
                        duration={500}
                    >
                        Home
                    </Link>
                </li>

                <li>
                    <Link 
                        to="programs" 
                        smooth={true} 
                        offset={-300} 
                        duration={500}
                    >
                        Programs
                    </Link>
                </li>


                 <li>
                    <Link 
                        to="about" 
                        smooth={true} 
                        offset={-300} 
                        duration={500}
                    >
                        About us
                    </Link>
                </li>



                 <li>
                    <Link 
                        to="campus" 
                        smooth={true} 
                        offset={-300} 
                        duration={500}
                    >
                        campus
                    </Link>
                </li>




                 <li>
                    <Link 
                        to="testimonials" 
                        smooth={true} 
                        offset={-300} 
                        duration={500}
                    >
                        Testimonials
                    </Link>
                </li>


                <li><Link to="contact" smooth={true} offset={0} duration={500} className="btn">Contact Us</Link></li>
            </ul>

        </nav>
    );
}

export default Navbar;