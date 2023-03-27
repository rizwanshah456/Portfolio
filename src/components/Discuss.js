import { motion } from "framer-motion"

const Discuss = () => {
    return (
       
        <>
        
        <div className="container px-5 md:py-24 py-10 mx-auto flex flex-wrap">
            <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                <div className="w-full sm:p-4 md:px-4 px-2 mb-6">
                    <h3 className="title-font font-bold text-5xl md:text-6xl mb-5 text-slate-700">A Design Angel for agencies</h3>
                    <div className="leading-relaxed">Think of me as a collaborative design partner, someone with the ability to craft intuitive user experiences working within your team or entirely on my own. Available for both in-house and remote project work, you’ll get access to the benefits of a full stack designer without having to fit the wage for a full time employee.</div>
                </div>
            </div>
            <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                <img className="object-cover object-center w-full h-full" src="content.jpg" alt="stats" />
            </div>
        </div>

        </>

       



    )
}

export default Discuss;