import heroImage from "../heroImage.webp"


const Hero = () => {
    return (
        <div className="p-5 text-center bg-image rounded-3" style={{ backgroundImage: "url('https://files.oaiusercontent.com/file-KQTwe5Bhqq0dSCLEdpJ3HA7c?se=2024-08-12T21%3A05%3A53Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D6960d31f-7f7b-4ee9-861e-9b9e3e2d83b0.webp&sig=%2Biu05UclnzPvQSGUU2eKbPF%2Bh5mLd2tJceEfKWF1RAk%3D')", height: "95vh" }}>
            <div className="mask">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="" style={{marginTop:"30vh"}}>
                        <h1 className="mb-3 text-dark">HEY, I'M AMIR SHAHZAD HASHMI</h1>
                        <h4 className="mb-3" style={{paddingLeft: '30vw',paddingRight: '30vw'}}>Full Stack Web Developer | Expertise in End-to-End Website Design & Development</h4>
                        <a data-mdb-ripple-init class="bg-danger btn text-white btn-lg px-5 mt-3" href="#!" role="button">PROJECTS</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;