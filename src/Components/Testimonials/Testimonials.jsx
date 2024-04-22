

const Testimonials = () => {
  return (
    <section className="lg:px-32 mt-16">
         <div className="text-center mt-5">
                <h1 className="text-3xl poppins-bold-italic">Services</h1>
                <h3 className="mt-1">My Projects</h3>
            </div>

            <section className="teams mt-10" id="teams">
        <div className="max-width">
            <div className="carousel gap-5 grid md:grid-cols-3 grid-cols-1 owl-carousel">
                <div className="card border">
                    <div className="box">
                        
                        <div className="text">Forum Community</div>

                        <p> Project View  : <a className="underline" href="https://forum-cummunity.web.app">Live Link</a></p>
                        <p> GitHub : <a className="underline" href="https://github.com/MIRNOMAN/forum-Community-client-project">Github Client Link</a></p>
                        <p> GitHub : <a className="underline" href="https://github.com/MIRNOMAN/forum-Community-server-project">Github Server Link</a></p>
                        <br/>
                        <p>Connect, share, and engage with like-minded individuals on our vibrant forum community. Join discussions, gain insights, and build connections today</p>
                    </div>
                </div>

                <div className="card border">
                    <div className="box ">
                        <div className="text">Online Group Study</div>

                        <p> Project View  : <a className="underline" href="https://car-doctor-project-6e8a6.web.app">Live Link</a></p>
                        <p> GitHub : <a className="underline" href="https://github.com/MIRNOMAN/Online-Group-Study-client">Github Client Link</a></p>
                        <p> GitHub : <a className="underline" href="https://github.com/MIRNOMAN/Online-Group-Study-server">Github Server Link</a></p>
                        <br/>
                        <p>Join our dynamic online group study platform,for shared resources, real-time communication, and academic success.</p>
                    </div>
                </div>

                <div className="card border">
                    <div className="box ">
                        <div className="text">E-Commerce</div>

                        <p> Project View  : <a className="underline" href="https://rootcart-shop.web.app">Live Link</a></p>
                        <p > GitHub : <a className="underline" href="https://github.com/MIRNOMAN/root_shop_cart">Github Client Link</a></p>

                        <br/>
                        <p>Discover a seamless shopping experience with our e-commerce site. Browse, click, and buy effortlessly for quality products and exceptional service.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
    </section>
  )
}

export default Testimonials