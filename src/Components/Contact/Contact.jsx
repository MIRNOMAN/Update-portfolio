

const Contact = () => {
  return (

    <div className="lg:px-20 mt-16">
     <div className="text-center mt-10">
                <h1 className="text-3xl poppins-bold-italic">Contact</h1>
                <h3 className="mt-1">Get in Touch</h3>
            </div>
 <section className="contact mt-10" id="contact">
        <div className="max-width">
           
            <div className="contact-content md:flex">
                <div className="column left">
                    <div className="text">Get in Touch</div>
                    <p>Reach out anytime. Open to messages and <br />collaboration opportunities. Thanks!</p>
                    <div className="icons">
                        <div className="row">
                        <i className="uil uil-user"></i>
                            <div className="info">
                                <div className="head">Name</div>
                                <div className="sub-title">Mir Noman</div>
                            </div>
                        </div>

                        <div className="row">
                        <i className="uil uil-location-point"></i>
                            <div className="info">
                                <div className="head">Address</div>
                                <div className="sub-title">Dhaka, Bangladesh</div>
                            </div>
                        </div>

                        <div className="row">
                        <i className="uil uil-linkedin"></i>
                            
                            <div className="info">
                                <a href="https://www.linkedin.com/in/abdullah-al-noman-b154692a3"> Link in profile</a>
                            </div>
                        </div>

                        <div className="row">
                        <i className="uil uil-envelope-edit"></i>
                            <div className="info">
                                <div className="head">Email</div>
                                <div className="sub-title">abdullahalnoman1509@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column right">
                    <div className="text">Message me</div>
                    <form >
                        <div className="fields">
                            <div className="field name">
                                <input  type="text" id="name" placeholder="Name" required />
                            </div>
                            <div className="field email">
                                <input type="email" id="email" placeholder="Email" required />
                            </div>
                        </div>
                        <div className="field textarea">
                            <textarea cols="20" rows="20" id="message" placeholder="Enter your message.." required></textarea>
                        </div>
                        <div className="button">
                            <button onClick="sendMail()" type="submit">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}

export default Contact