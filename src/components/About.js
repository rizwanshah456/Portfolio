
import { Typography } from "@mui/material";
import { motion } from "framer-motion"
import { Link } from 'react-scroll';
import { AiOutlineArrowDown } from "react-icons/ai";



const About = () => {

    return (

        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex md:px-5 px-1 md:py-24 py-10 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24  md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h3 className="title-font sm:text-6xl text-4xl font-bold mb-4 text-slate-700">Full Stack Developer

                        </h3>
                        <p className="mb-8 leading-relaxed md:text-md">Hi, my name is Rizwan Ahmad, a full stack developer who likes creating websites like his coffee.
                            Through considered and creating website, I deliver exceptional experiences that help businesses grow and brands shine.</p>
                        <div className="flex justify-center">
                            <Link to="projects" spy={true} smooth={true} offset={-100} duration={500}>
                                <motion.button whileHover={{ scale: 1.2 }} className="bg-white px-3 py-1 font-bold rounded-full md:text-lg text-xl drop-shadow-lg hover:cursor-pointer hover:bg-rose-300 hover:text-white flex items-center gap-1">see my work <AiOutlineArrowDown className="text-slate-900 hover:text-white"/></motion.button>
                            </Link>

                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full px-3">
                        <img className="object-cover object-center md:rounded-xl rounded" alt="hero" src="mypic3.jpg" />
                    </div>
                </div>
            </section>

        </>




    )
}

export default About;
