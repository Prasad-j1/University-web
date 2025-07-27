import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Video from "./Components/VideoPlayer/Video";
import { useState } from "react";


function App() {

  const [videoplay,setvideoplay]=useState(false);

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title subtitle="Our program" title="What we Offer" />
        <Programs></Programs>

        {/* when somone click on play img then it will pass setvideo as true*/}
        <About setvideoplay={setvideoplay}></About>
        <Title subtitle="Gallery" title="Campus Photos" />
        <Campus></Campus>
        <Title subtitle="TESTIMONIALS" title="What Student Says" />
        <Testimonials></Testimonials>
        
        <Title subtitle="contact us" title="Get in Touch" />
        <Contact></Contact> 
        <Footer></Footer>
      </div>

      {/* if someone click on play img then videoplay gets true and it will render this img */}
      {videoplay ? <Video videoplay={videoplay} setvideoplay={setvideoplay}></Video> :null}
      
    </div>
  )
}

export default App;
