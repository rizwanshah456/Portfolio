import { BsPerson, BsLaptop, BsTelephoneInbound } from "react-icons/bs";
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <>



      <header className="text-gray-600 body-font bg-white shadow-lg rounded">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

            <span className="ml-3 text-2xl font-bold text-slate-700 hover:text-rose-300">codeWithR_Ahmad</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center cursor-pointer md:text-xl text-bold font-bold">

            <Link to="about" spy={true} smooth={true} offset={-100} duration={500} className="mr-5 flex gap-1 items-center hover:text-rose-300" ><BsPerson className="md:text-xl" /> About</Link>
            <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} className="mr-5 flex gap-1 items-center hover:text-rose-300" ><BsLaptop className="md:text-xl" /> Projects</Link>
            <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className="mr-5 flex gap-1 items-center hover:text-rose-300" ><BsTelephoneInbound className="md:text-xl" /> Get in touch</Link>


          </nav>

        </div>
      </header>
    </>
  )
}


export default Navbar;