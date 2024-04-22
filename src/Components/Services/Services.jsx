import { useState } from "react"


const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) =>{
        setToggleState(index);
    }
  return (
    <section className="lg:px-32 mt-16">
         <div className="text-center mt-5">
                <h1 className="text-3xl poppins-bold-italic">Services</h1>
                <h3 className="mt-1">What i offer</h3>
            </div>
            <div className="services_container mt-8 md:grid-cols-3 grid-cols-1 p-6 gap-3 container grid">
              <div className="services_content">
                <div>
                    <i className="uil uil-web-grid services_icon"></i>
                    <h3 className="services_title">Product <br/> Designer</h3>
                </div>
                <span className="services_button" onClick={() =>toggleTab(1)}>View More
                <i className="uil uil-arrow-right services_button_icon"></i>
                </span>

                <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                    <div className="services_modal_content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>
                        <h3 className="services_modal-title">Product Designer</h3>
                        <p className="services_modal-description mt-3">
                            Services with more than 3 years of experience. providing quality work to  clients and companies.
                        </p>

                        <ul className="services_modal-services grid mt-5">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I develop the user interface.
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Web page development.
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I create UX element interections.
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I position your company brand.
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   Design and mockups of products for companies.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
              </div>

              <div className="services_content">
                <div>
                    <i className="uil uil-arrow services_icon"></i>
                    <h3 className="services_title">Ui/Ux <br/> Designer</h3>
                </div>
                <span className="services_button" onClick={() =>toggleTab(2)}>View More
                <i className="uil uil-arrow-right services_button_icon"></i>
                </span>

                <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
                    <div className="services_modal_content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>
                        <h3 className="services_modal-title">Ui/Ux Designer</h3>
                        <p className="services_modal-description mt-3">
                            Services with more than 3 years of experience. providing quality work to  clients and companies.
                        </p>

                        <ul className="services_modal-services grid mt-5">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I develop the user interface.
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Web page development.
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I create UX element interections.
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I position your company brand.
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   Design and mockups of products for companies.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
              </div>


              <div className="services_content">
                <div>
                    <i className="uil uil-edit services_icon"></i>
                    <h3 className="services_title">Visual <br/> Designer</h3>
                </div>
                <span className="services_button" onClick={() =>toggleTab(3)}>View More
                <i className="uil uil-arrow-right services_button_icon"></i>
                </span>

                <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
                    <div className="services_modal_content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>
                        <h3 className="services_modal-title">Visual Designer</h3>
                        <p className="services_modal-description mt-3">
                            Services with more than 3 years of experience. providing quality work to  clients and companies.
                        </p>

                        <ul className="services_modal-services mt-5 grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I develop the user interface.
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Web page development.
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I create UX element interections.
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I position your company brand.
                                </p>
                            </li>
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                   Design and mockups of products for companies.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
              </div>
            </div>
    </section>
  )
}

export default Services