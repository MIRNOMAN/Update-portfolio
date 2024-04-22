import image from "../../Images/IMG_20240411_095350.png"

const About = () => {
    return (
        <section className="lg:px-32 ">
            <div className="text-center mt-5">
                <h1 className="text-3xl poppins-bold-italic">About Me</h1>
                <h3 className="mt-1">My Introduction</h3>
            </div>
            <div className="lg:flex justify-center items-center mt-16">
                <div className="lg:w-1/2 flex justify-center mb-4">
                    <img className="md:h-[380px] h-[280px] md:w-[350px] rounded-md" src={image} alt="" />
                </div>
                <div className="lg:w-1/2 md:text-left text-center p-3">
                    <div className="flex gap-4">
                        <div className="text-center p-5 rounded-md border">
                            <i className="uil uil-award text-xl "></i>

                            <h3>Experience</h3>
                            <span>2 Years Working</span>
                        </div>

                        <div className="text-center border p-5 rounded-md ">
                        <i className="uil uil-briefcase text-xl"></i>
                            <h3>Completed</h3>
                            <span>25 + projects</span>
                        </div>

                        <div className="text-center border p-5 rounded-md ">
                        <i className="uil uil-cloud-question text-xl"></i>

                            <h3>Support</h3>
                            <span>Online 24/7</span>
                        </div>
                    </div>

                    <p className="mt-3">I'm study third-year student pursuing a B.Sc. in Computer Science at Shaikh Burhanuddin College. I'm a passionate learner, always eager to explore and work across various technologies and domains. I enjoy delving into new technologies to solve real-life problems and find fulfillment in guiding and mentoring newcomers. Currently, I am focused on honing my skills in Web Development while also dedicated to improving my proficiency in Data Structures and Algorithms.</p>

                    <a href="/public/professional resume.pdf" download="mir Noman resume.pdf">
                <button type="button" className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Resume <i className="uil uil-arrow-circle-down"></i></button>
              </a>
                </div>
            </div>
        </section>
    )
}

export default About