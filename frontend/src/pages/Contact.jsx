import React, { useState } from 'react';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission logic here
        console.log('Form Data Submitted: ', formData);
    };

    return (
        <div style={{ backgroundImage: "url('https://files.oaiusercontent.com/file-KQTwe5Bhqq0dSCLEdpJ3HA7c?se=2024-08-12T21%3A05%3A53Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D6960d31f-7f7b-4ee9-861e-9b9e3e2d83b0.webp&sig=%2Biu05UclnzPvQSGUU2eKbPF%2Bh5mLd2tJceEfKWF1RAk%3D')"}} className="d-flex justify-content-center flex-column align-items-center py-5">
            <div className="h2 mt-5">ABOUT ME</div>
            <hr style={{
                border: "3px solid #dc3545",
                paddingLeft: "13px",
                paddingRight: "13px",
                borderRadius: "30px",
                opacity: '100'
            }}/>
            <div style={{textAlign: "center", maxWidth: "50rem"}}>Here you will find more information about me, what I
                do, and my current skills mostly in terms of
                programming and technology
            </div>

            <div className="container mt-5">
                <form onSubmit={handleSubmit} style={{marginLeft:"20%",marginRight:"20%"}}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            placeholder="Enter Your Name"
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            placeholder="Enter Your Email Address"
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea
                            placeholder="Enter Your Message Here!"
                            className="form-control"
                            id="message"
                            name="message"
                            rows="3"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-danger mt-4 py-2 px-4">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
