export default function HeroSection(){
    return (
        <div>
            <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
            <div className="hero--section-content">
                <p className="section--title">Hey , I am Guru </p>
                <h1 className="hero--section--title">
                    <span className="hero--section-title--color">Full Stack</span>
                    {""}
                    <br />
                    Developer
                </h1>
                        <p className="hero--section-description">
                        Aspiring Fullstack Developer | Experienced with React, C and Python | UG @ SUTD Computer Science & Design
                        <br />Excited to learn and grow in the tech industry!
                        
                        </p>
                
                
            </div>
            <button className="btn btn-primary" onClick={() => window.location.href = 'https://www.linkedin.com/in/guruprasath3200/'}>Get in Touch</button>


            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.png" alt="hero" />
            </div>
            </section>
        </div>
    )
}
