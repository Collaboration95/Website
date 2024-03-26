export default function HeroSection(){
    return (
        <div>
            <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
            <div className="hero--section-content">
                <p className="section--title">Hey , I am Guru</p>
                <h1 className="hero--section--title">
                    <span className="hero--section-title--color">Full Stack</span>
                    {""}
                    <br />
                    Developer
                </h1>
                        <p className="hero--section-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
                        <br />Dolorum , quas , recusandae. Est, cumque.
                        
                        </p>
                
                
            </div>
            <button className="btn btn-primary">Get in Touch</button>

            </div>
            <div className="hero--section--img">
                <img src="https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b" alt="hero" />
            </div>
            </section>
        </div>
    )
}
