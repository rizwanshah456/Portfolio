const Services = () => {
    return (
        <div>
            <h4 className="md:text-6xl text-5xl font-bold mx-auto md:w-1/5 w-full mt-[3rem]">Services</h4>
            <p className="mx-auto md:w-3/5 w-full text-md mt-[2rem]">I work with businesses, brands and agencies of small sizes on projects covering the full functioning website from scratch including both frontend and backend which is connectd to database. </p>

            {/* <div className="flex bg-white mt-[2rem]">
                <div className="basis-1/2">

                    <h3 className="text-3xl w-1/5 mx-auto font-bold mt-[2rem]">Frontend</h3>
                    <p className="w-1/2 mx-auto mt-[0.3rem]">i will create a design for your business</p>


                    <div className="grid gap-2 mt-[2rem]">
                        <div className="grid grid-flow-col rounded-full w-2/3 mx-auto text-center border-solid border border-black items-center">
                            <h4>Html</h4>
                            <h4>Css</h4>
                            <h4>Javascript</h4>
                            <h4>React</h4>
                        </div>
                        <div className="grid grid-flow-col items-center rounded-full w-3/4 mx-auto text-center border-solid border border-black">
                            <h4>Bootstrap</h4>
                            <h4>Tailwindcss</h4>
                            <h4>material-ui</h4>
                            <h4>framer-motion</h4>
                        </div>
                    </div>
                </div>

                <div className="basis-1/2">

                    <h3 className="text-3xl w-1/5 mx-auto mt-[2rem] font-bold">Backend</h3>
                    <p className="w-1/2 mx-auto mt-[0.3rem]">i will write backend of your website</p>


                    <div className="grid gap-2 mt-[2rem]">
                        <div className="grid grid-flow-col rounded-full w-2/3 mx-auto text-center border-solid border border-black items-center">
                            <h4>Html</h4>
                            <h4>Css</h4>
                            <h4>Javascript</h4>
                            <h4>React</h4>
                        </div>
                        <div className="grid grid-flow-col items-center rounded-full w-3/4 mx-auto text-center border-solid border border-black">
                            <h4>Bootstrap</h4>
                            <h4>Tailwindcss</h4>
                            <h4>material-ui</h4>
                            <h4>MERN</h4>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className="grid grid-flow-col bg-white px-5 mt-[3rem] pb-[2.5rem] drop-shadow-xl">
                <div className="">
                    <h3 className="md:text-3xl text-xl font-bold w-1/2 mx-auto mt-[2rem]">Frontend</h3>
                    <p className="mt-[0.5rem] text-sm">i will write frontend of your website in React</p>
                </div>

                <div>
                    <h3 className="md:text-3xl text-xl font-bold w-1/2 mx-auto mt-[2rem]">Backend</h3>
                    <p className="mt-[0.5rem] text-sm">i will write backend of your website in Node-js</p>
                </div>

                <div>
                    <h3 className="md:text-3xl text-xl font-bold w-1/2 mx-auto mt-[2rem]">Full-stack</h3>
                    <p className="mt-[0.5rem] text-sm">i will write both frontend and bakckend of your website</p>
                </div>

               
            </div> */}
            <section className="text-gray-600 body-font bg-white drop-shadow-lg md:mt-[2rem] bg-slate-50 mt-[2rem]">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
        <div className="px-4 py-6 rounded-lg">
        <h2 className="font-bold text-4xl">Frontend</h2>
        <p className="text-lg mt-[1rem]">i will write frontend of your website in React</p>
        </div>
      </div>

      <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
        <div className="px-4 py-6 rounded-lg">
        <h2 className="font-bold text-4xl">Backend</h2>
        <p className="text-lg mt-[1rem]">i will write backend of your website in Node-js</p>
        </div>
      </div>

      <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
        <div className="px-4 py-6 rounded-lg">
        <h2 className="font-bold text-4xl">Full Stack</h2>
        <p className="text-lg mt-[1rem]">i will write both frontend and bakckend of your website</p>
        </div>
      </div>
     
    </div>
  </div>
</section>
        </div>
    )
}

export default Services;