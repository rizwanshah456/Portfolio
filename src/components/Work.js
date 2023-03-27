import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
const Work = () => {
    return (
        <>
            <div id='projects'>
                <div className="grid grid-flow-col md:mt-[1rem] mt-0 gap-[1rem]">
                  

                    <div className="grid mx-auto md:w-2/3 w-full drop-shadow-md">
                        <div className="mt-[2rem]">
                            <h3 className="md:text-8xl text-7xl text-center text-gray-500 font-bold">Work</h3>
                            <p className="md:text-lg text-md mt-[1.5rem] md:bg-fuchsia-50 md:p-5 p-2 text-gray-500 bg-gray-50">With a focus on human-centred design, I craft beautiful digital experiences and products with a focus on the end user.</p>
                            <p className="md:text-lg text-md mt-[0.5rem] md:bg-fuchsia-50 md:p-5 p-2 text-gray-500 bg-gray-50">Check out some of my recent design projects - the examples should give you a good indication of my development and branding skills.

                            </p>
                        </div>



                    </div>
                </div>

                <div className='grid md:grid-flow-col grid-col-1 gap-[3rem] p-5 mt-[3rem]'>
                    <Card style={{ border: "none", boxShadow: "none" }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="content6.png"
                            alt="green iguana"
                        />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                NewsApp
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                its a news website which will fetch the data from an api and shows you the  daily updated news.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card style={{ border: "none", boxShadow: "none" }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="content7.png"
                            alt="green iguana"
                        />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Textutils
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                textutils provides functionality to play with your text as you want like on a single click you removes extra spaces of your text.
                            </Typography>
                        </CardContent>
                    </Card>


                </div>
            </div>
        </>
    )
}


export default Work;