import portfolio from "../portfolio.png"

const Project = () => {
    return (
        <section className="d-flex container-fluid flex-column py-5" style={{backgroundColor: "hsl(30, 10%, 96%"}}>
            <div className="container mt-5 flex-column d-flex align-items-center mb-5">
                <div className="h2">PROJECTS</div>
                <hr style={{border: "3px solid #dc3545",paddingLeft:"13px",paddingRight:"13px",borderRadius:"30px",opacity:'100'
                }} />
                <div style={{textAlign:"center",maxWidth:"50rem"}}>Here you will find some of the personal and clients projects that I created with each project containing its own case study
                </div>
            </div>

            <div className="container row">

                <div className="p-5 col-md-6 col-12">
                    <img className="img-fluid p-3" src={portfolio} />
                </div>

                <div className="p-5 col-md-6 col-12 my-auto">
                    <div className="h3 pb-3">Get to Know me!</div>
                    <div>I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web
                        Applications that leads to the success of the overall product. Check out some of my work in the
                        Projects section.

                        I also like sharing content related to the stuff that I have learned over the years in Web
                        Development so it can help other people of the Dev Community. Feel free to Connect or Follow me
                        on my Linkedin and Instagram where I post useful content related to Web Development and
                        Programming
                    </div>
                    <button className="btn btn-danger mt-4 py-2 px-4">Check It Out!</button>
                </div>
            </div>

        </section>
    )
}

export default Project;