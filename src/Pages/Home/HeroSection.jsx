
export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Ruvindya</p>
                    <h1 className="hero--section--title ">
                        <span className="hero--section-title--color">Full Stack</span>{""}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section-description">
                    I'm a dedicated software engineering student looking for an internship in backend or full-stack development.<br/> I'm
excited to learn and grow by getting hands-on experience. I enjoy working with others and believe in continuous learning through teamwork.
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.png" alt="Hero Section"/>
            </div>
        </section>
    );
}