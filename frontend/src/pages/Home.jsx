import hell from "../hell1.png";
import {Container} from "react-bootstrap";
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Project />
            <Contact />
            <Footer />
        </div>

    )
}

export default Home;