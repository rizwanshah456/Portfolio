
import About from "./About";
import AboutMe from "./AboutMe";
import Contact from "./contact";
import Discuss from "./Discuss";


import Navbar from "./Navbar";
import Services from "./Services";
import Work from "./Work";

const Layout=()=>{
    return(
      
        
        
        <div className="px-2 sm:px-3 md:px-4 lg:px-5 bg-white">
        <Navbar/>
        <About />
        <AboutMe/>
        <Services/>
        <Discuss/>
        <Work/>
        <Contact/>
        
        </div>
     
       

        
        
        
    )
}

export default Layout;