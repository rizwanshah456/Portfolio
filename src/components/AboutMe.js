import { BsMusicNoteBeamed } from "react-icons/bs";
import { GiCoffeeCup, GiCricketBat } from "react-icons/gi";
const AboutMe = () => {
    return (
        <>
            <div id="about" className="md:w-1/2 w-full mt-[2rem] md:mt-0 rounded mb-[2rem] mt-0  md:px-3 md:px-8 px-5 md:py-2 py-5 drop-shadow-lg md:ml-[1.5rem] grid gap-[2rem] bg-white">
                <h2 className="text-5xl font-bold text-green-900">About me</h2>
                <p>I’m a full-stack developer from last couple of months of development experience across the small projects as a freelancer</p>
                <p>With a focus on usability and user experience, I’ve built a reputation for creating and delivering unique digital experiences for everyone from small projects to large e-commerce websites</p>
                <p>When I’m not creating website, you’ll find me enjoying a coffee, playing cricket (yes, for fun!) or working on my next tiny home project.</p>

                <div>
                    <h3 className="text-2xl font-bold">Interests</h3>
                    <div className="grid grid-flow-col mt-[1rem]">
                    <div className="flex space-x-2 items-center">
                        <GiCoffeeCup className="text-2xl" />
                        <h3 className="">Coffee</h3>
                    </div>

                    <div className="flex space-x-2 items-center">
                        <GiCricketBat className="text-2xl" />
                        <h3 className="">Playing Video Game</h3>
                    </div>

                    <div className="flex space-x-2 items-center">
                        <BsMusicNoteBeamed className="text-2xl" />
                        <h3 className="">Music</h3>
                    </div>
                    </div>
                </div>

               
            </div>

           
          

<section className="text-gray-600 body-font bg-white drop-shadow-lg md:mt-[2rem] bg-slate-50">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
        <div className="px-4 py-6 rounded-lg">
        <h2 className="font-bold text-7xl">6</h2>
        <p className="text-xl mt-[1rem]">months in the industry</p>
        </div>
      </div>

      <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
        <div className="px-4 py-6 rounded-lg">
        <h2 className="font-bold text-7xl">10</h2>
        <p className="text-xl mt-[1rem]">Projects Completed</p>
        </div>
      </div>

      <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
        <div className="px-4 py-6 rounded-lg">
        <h2 className="font-bold text-7xl">30</h2>
        <p className="text-xl mt-[1rem]">Coffees drank for 2022</p>
        </div>
      </div>
     
    </div>
  </div>
</section>

          
        </>
    )
}

export default AboutMe;