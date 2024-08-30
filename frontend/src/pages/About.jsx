const About = () => {
    return (
        <section className="d-flex container-fluid flex-column py-5" style={{backgroundColor: "#efedec"}}>
            <div className="container mt-5 flex-column d-flex align-items-center mb-5">
                <div className="h2">ABOUT ME</div>
                <hr style={{border: "3px solid #dc3545",paddingLeft:"13px",paddingRight:"13px",borderRadius:"30px",opacity:'100'
                }} />
                <div style={{textAlign:"center",maxWidth:"50rem"}}>Here you will find more information about me, what I do, and my current skills mostly in terms of
                    programming and technology
                </div>
            </div>

            <div className="container row">
                <div className="p-5 col-md-6 col-12">
                    <div className="h3 pb-3">Get to Know me!</div>
                    <div>I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.

                        I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin and Instagram where I post useful content related to Web Development and Programming

                        I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</div>
                    <button className="btn btn-danger mt-3 py-2 px-4">CONTACT</button>
                </div>
                <div className="p-5 col-md-6 col-12">
                    <div className="h3 ps-2 pb-3">My Skills</div>
                    <div className="d-flex flex-wrap">
                        <div className="m-2 border p-1 ps-3 pe-3 bg-danger py-2" style={{borderRadius:"6px"}}>CSS</div>
                        <div className="m-2 border p-1 ps-3 pe-3 bg-danger py-2" style={{borderRadius:"6px"}}>JavaScript</div>
                        <div className="m-2 border p-1 ps-3 pe-3 bg-danger py-2" style={{borderRadius:"6px"}}>React</div>
                        <div className="m-2 border p-1 ps-3 pe-3 bg-danger py-2" style={{borderRadius:"6px"}}>Github</div>
                        <div className="m-2 border p-1 ps-3 pe-3 bg-danger py-2" style={{borderRadius:"6px"}}>Git</div>
                        <div className="m-2 border p-1 ps-3 pe-3 bg-danger py-2" style={{borderRadius:"6px"}}>Terminal</div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About;