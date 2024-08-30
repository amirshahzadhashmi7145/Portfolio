import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <footer className="bg-body-tertiary text-center">
            <Container className="p-4 pb-0">
                {/* Section: Social media */}
                <Row className="mb-4 justify-content-center">
                    <Col xs="auto">
                        <Button variant="facebook" className="btn-floating m-1" href="#!">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </Button>
                    </Col>
                    <Col xs="auto">
                        <Button variant="twitter" className="btn-floating m-1" href="#!">
                            <FontAwesomeIcon icon={faTwitter} />
                        </Button>
                    </Col>
                    <Col xs="auto">
                        <Button variant="google" className="btn-floating m-1" href="#!">
                            <FontAwesomeIcon icon={faGoogle} />
                        </Button>
                    </Col>
                    <Col xs="auto">
                        <Button variant="instagram" className="btn-floating m-1" href="#!">
                            <FontAwesomeIcon icon={faInstagram} />
                        </Button>
                    </Col>
                    <Col xs="auto">
                        <Button variant="linkedin" className="btn-floating m-1" href="#!">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </Button>
                    </Col>
                    <Col xs="auto">
                        <Button variant="github" className="btn-floating m-1" href="#!">
                            <FontAwesomeIcon icon={faGithub} />
                        </Button>
                    </Col>
                </Row>
            </Container>

            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2020 Copyright:
                <a className="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
        </footer>
    );
}

export default Footer;
