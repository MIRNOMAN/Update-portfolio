import Typical from "react-typical"


const Banner = () => {
  return (
    <>
      <section className="md:flex md:items-center text-center px-4 py-6 md:px-32 md:py-20">
        <div className="md:space-y-4 lg:space-y-4  sm:text-center  md:grid  md:grid-cols-1 text-3xl">
          <a href="https://www.instagram.com/mirnoman7676?igsh=MTFqbnRjZ3dwZmtmcQ=="> <i className="uil uil-instagram"></i></a>
          <a href="https://www.linkedin.com/in/abdullah-al-noman-b154692a3"><i className="uil uil-linkedin-alt"></i></a>
          <a href="https://github.com/MIRNOMAN"> <i className="uil uil-github"></i></a>
        </div>
        <div className="md:ml-12 lg:text-left  mt-3 lg:w-2/3">
          <h1 className="text-4xl  font-semibold">Hello, I'M <span className="text-orange-600 font-semibold text-4xl">NOMAN</span></h1>
          <div>
            <h1 className="text-2xl mt-1 font-medium">
              {" "}
              <Typical
                loop={Infinity}
                steps={[
                  "Front End Dev",
                  1000,
                  "MERN Stack Dev",
                  1000,
                  "React Native Dev",
                  1000,
                ]}
              />


            </h1>
            <h1 className="mt-2 text-lg">Knock of building applications with front and back end operations.</h1>

            <div className="mt-3">
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Hire me</button>
              <a href="/public/professional resume.pdf" download="mir Noman resume.pdf">
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3">
          <img className="home_img mx-auto"  alt="" />
        </div>
      </section>
    </>
  )
}

export default Banner