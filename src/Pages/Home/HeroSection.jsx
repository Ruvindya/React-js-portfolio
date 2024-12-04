
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
                        
                        JavaScript | ReactJs | React Native | NodeJs <br></br>
                        Tailwind CSS | HTML | CSS <br></br>
                        
                        MySQL | Mongodb | ElasticSearch<br></br>
                        Docker | Figma | Jira
                        
                    </p>
                </div>
                <div className="hero--section--btn--container">
                   {/* 
                   <button className="btn btn-primary">Get In Touch</button>       
    */    }       
                        <a
                            className="btn button--link"
                            href="./img/CV.pdf"
                            download="Sachinthani W M R CV"
                            >
                            Download Resume
                        </a>   
                </div>               
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.png" alt="Hero Section"/>
            </div>
        </section>
    );
}