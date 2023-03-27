import { GrLinkedinOption } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { motion } from "framer-motion"
import {useContext } from "react";
import axios from 'axios';
import Navbar from "./Navbar";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { PortfolioContext } from "../context/PortfolioContext";






const Contact=()=>{
    const {name,setName,email,setEmail,phone,setPhone} = useContext(PortfolioContext);
 
      
    const scrollToTop=()=>{
        var Scroll = require('react-scroll');
        var scroll = Scroll.animateScroll;
        scroll.scrollToTop(Navbar)
    }


    const submitHandler=async(e)=>{
        e.preventDefault();
        // const user = {
        //    name,email,phone
        // }
     
        // try{
        //     const res = await axios.post("/auth/newUser",user);
        //     // console.log(res.data);
            
        //     }catch(err){
        //         console.log(err);
        //     }

        setName("");
        setEmail("");
        setPhone("");
        alert("Thanks for contacting me i will contact you soon");
        
        
    }

    
    return(
        <>
        <div className="flex md:flex-row flex-col mt-[5rem] bg-slate-800 text-white md:p-8 p-5" id="contact"  >
            <div className="md:basis-1/2 basis-1">
                <h3 className="text-6xl font-bold">Get in touch</h3>
                <h5 className="mt-[2rem] text-lg">👋 Hello - I Iive in jalandhar punjab, India.</h5>
                <p className="mt-[2rem] text-lg md:w-5/6 w-full">If you’ve got a project in mind, let’s talk! We can grab a coffee in person or if it’s easier, simply book in a Zoom meeting with me and we can jump on a call.</p>
                <div className="grid grid-flow-col md:mt-[3rem] mt-[2rem] text-4xl md:w-1/4 w-full">
                   {/* <GrLinkedinOption/> */}
                   <a href="https://www.instagram.com/rizwan.s_ha_h/" target="_blank" className="hover:text-rose-200">
                   <BsInstagram/></a>
                   <a href=" " target="_blank" className="hover:text-rose-200">
                   <FaTelegramPlane/></a>
                   
                </div>
            </div>
          


            <div className="md:basis-1/2 basis-1">
            <form className="grid mt-5 md:pl-5" method="POST" onSubmit={submitHandler}>
                   
                   <label  className="text-lg mt-1">Name:</label>
                   <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required className="md:w-3/5 w-full text-black text-sm rounded p-2 focus:outline-none drop-shadow-lg" />

                   <label  className="text-lg mt-1">Email:</label>
                   <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} required className="md:w-3/5 w-full text-black text-sm rounded p-2 focus:outline-none drop-shadow-lg" />

                   <label  className="text-lg mt-1">Phone-no:</label>
                   <input type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)} required className="md:w-3/5 w-full text-black text-sm rounded p-2 focus:outline-none drop-shadow-lg" />

                   <motion.button  whileHover={{scale:1.25}}  className="mt-[1rem] md:w-1/3 w-full md:ml-[4.1rem] bg-white px-3 py-1 text-black  font-bold rounded-full text-lg drop-shadow-lg hover:cursor-pointer hover:bg-rose-300 hover:text-white">Submit</motion.button>


                
                   
               </form>
               {/* <button onClick={scrollToTop}>top</button> */}
               
                
                
            </div>
            <BsFillArrowUpCircleFill className="text-5xl cursor-pointer hover:text-slate-200 md:mt-0 mt-5" onClick={scrollToTop}/>

        </div>

        </>
    )
}

export default Contact;
