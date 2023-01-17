import React from "react";
import "./CSS/App.css";
import "./CSS/About.css"
import "./CSS/Animation.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import Link from "@mui/material/Link";
import "./CSS/Contact.css";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import "./CSS/Skills.css"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import img from "./img/IMG_0082.jpg"
// import ReactDOM from 'react-dom/client';


const Menu = props => {
    return (
        <div className={`menu-container ${props.showMenu}`}>
            <div className="menu-items">
                <div className="img" />
                <div className="Name">Shubham</div>
                <div className="ico">
                    <div className="icon"><Link target="_blank"
                        href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"><TwitterIcon
                            sx={{ fontSize: 17 }} /></Link></div>
                    <div className="icon"><Link target="_blank"
                        href="https://www.facebook.com/shubham.kakadiya.182"><FacebookRoundedIcon
                            sx={{ fontSize: 17 }} /></Link></div>
                    <div className="icon"><Link target="_blank" href="https://www.instagram.com/shubham.kakadiya.9725/"><InstagramIcon
                        sx={{ fontSize: 17 }} /></Link></div>
                    <div className="icon"><Link target="_blank"
                        href="https://clientlogin.cdn.skype.com/cdn/6.0.1/release/index.html"><CloudQueueIcon
                            sx={{ fontSize: 17 }} /></Link></div>
                    <div className="icon"><Link target="_blank"
                        href="https://www.linkedin.com/in/kakadiya-shubham-b42661235/"><LinkedInIcon
                            sx={{ fontSize: 17 }} /></Link></div>
                </div>
                <ul>
                    <li>
                        <a href="#welcome-section" onClick={props.toggleMenu}>
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="#about" onClick={props.toggleMenu}>
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#projects" onClick={props.toggleMenu}>
                            PORTFOLIO
                        </a>
                    </li>
                    <li>
                        <a href="#Contact" onClick={props.toggleMenu}>
                            CONTACT
                        </a>
                    </li>
                </ul>
                <SocialLinks />
            </div>
        </div>
    );
};
/***********************
 Nav Component
 ***********************/

const Nav = props => {
    return (
        <React.Fragment>
            <nav id="navbar">
                <div className="nav-wrapper">
                    <div className="menu">
                        <a
                            onClick={props.toggleMenu}
                            className={props.showMenu === 'active' ? 'menu-button active' : 'menu-button'}
                        >
                            <span />
                        </a>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
};
<<<<<<< HEAD

=======
>>>>>>> 41f6479dda49dd9e7fe7121c4af2186905d57fd1

var ReactRotatingText = require('react-rotating-text');

const Header = props => {
    return (
        <header id="welcome-section">
            <div className="forest" />
            <div className="silhouette" />
            <div className="moon" />
            <div className="container">
                <div className="middle">
                    <div className="text-type-animation">Kakadiya Shubham</div>
                    <span className="text-type-animation"><strong>I'm  </strong>
<<<<<<< HEAD
                        <ReactRotatingText items={['Designer', 'Developer', 'Freelancer']} />
=======
                        <ReactRotatingText className="txt-rotate" items={['Designer', 'Developer', 'Freelancer']} />
>>>>>>> 41f6479dda49dd9e7fe7121c4af2186905d57fd1
                    </span>
                </div>
            </div>
        </header>
    );
};


const About = props => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-title">
                    <h2>About</h2>
                    <p>My name is Shubham Kakadiya and I am a skilled Web designer and web developer and i presenting
                        unique
                        projects. I work both with businesses and individuals, and always find a non-standard approach
                        to the task.
                    </p>
                </div>
                <div className="row">
                    <div className="col-lg-4 aos-init aos-animate" data-aos="fade-right">
                        <img src={img} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content aos-init aos-animate" data-aos="fade-left">
                        <h3>Web Designer &amp; WordPress Developer.</h3>
                        <p className="fst-italic">
                            I work with commercial projects of any scale and with private requests. I use the latest
                            tools and creative approaches that help solve a specific business or personal issue.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i><ChevronRightIcon style={{ fontSize: '35px' }} /></i>
                                        <strong>Birthday:</strong> <span>27 05 2003</span>
                                    </li>
                                    <li><i><ChevronRightIcon style={{ fontSize: '35px' }} /></i> <strong>Phone:</strong>
                                        <span>+91 9725340590</span>
                                    </li>
                                    <li><i><ChevronRightIcon style={{ fontSize: '35px' }} /></i> <strong>City:</strong>
                                        <span>Gujarat, INDIA</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i><ChevronRightIcon style={{ fontSize: '35px' }} /></i> <strong>Degree:</strong>
                                        <span>B.COM ( RUNNING )</span>
                                    </li>
                                    <li><i><ChevronRightIcon style={{ fontSize: '35px' }} /></i>
                                        <strong>Email:</strong><span>kakadiyas682@gmail.com</span></li>
                                    <li><i><ChevronRightIcon style={{ fontSize: '35px' }} /></i>
                                        <strong>Freelance:</strong>
                                        <span>Available</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

const Skills = props => {
    return (
        <section id="skills" className="skills section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Skills</h2>
                </div>
                <div className="row skills-content">
                    <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up">
                        <div className="progress">
                            <span className="skill">HTML <i className="val">100%</i></span>
                            <div className="progress-bar-wrap">
                                <div style={{ width: '100%' }} aria-valuemax="100" className="progress-bar"
                                    role="progressbar" aria-valuenow="100" aria-valuemin="0"></div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">CSS <i className="val">90%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0"
                                    aria-valuemax="100" style={{ width: '90%' }}>
                                </div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">JavaScript <i className="val">80%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0"
                                    aria-valuemax="100" style={{ width: '80%' }}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                        <div className="progress">
                            <span className="skill">REACT JS <i className="val">70%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow="60"
                                    aria-valuemin="0"
                                    aria-valuemax="100" style={{ width: '70%' }}>
                                </div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">NODE JS <i className="val">60%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow="60"
                                    aria-valuemin="0"
                                    aria-valuemax="100" style={{ width: '60%' }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

const Contact = props => {
    return (
        <section id="Contact" className="contact">
            <div className="container">
                <div className="section-title">
                    <h2>Contact Us</h2>
                </div>
                <div className="row aos-init aos-animate data" data-aos="fade-in">
                    <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="info">
                            <div className="address">
                                <i><LocationOnOutlinedIcon /></i>
                                <h4>Location:</h4>
                                <p>Rachana Society, Surat, Gujarat</p>
                            </div>
                            <div className="email">
                                <i><EmailOutlinedIcon /></i>
                                <h4>Email:</h4>
                                <p>kakadiyas682@gmail.com</p>
                            </div>
                            <div className="phone">
                                <i><SmartphoneIcon /></i>
                                <h4>Call:</h4>
                                <p>+91 9725340590</p>
                            </div>
                            <iframe width="100%" height="290" frameBorder="0" scrolling="no" marginHeight="0"
                                marginWidth="0"
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Rachana%20Society,%20Surat,%20Gujarat+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                <a href="https://www.maps.ie/distance-area-calculator.html">area maps</a></iframe>
                        </div>
                    </div>
                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
<<<<<<< HEAD
                        <form action="https://formspree.io/f/mknagraz" method="post" role="form"
=======
                        <form method="post" role="form"
>>>>>>> 41f6479dda49dd9e7fe7121c4af2186905d57fd1
                            className="php-email-form">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Your Name <span>*</span></label>
                                    <input type="text" name="name" className="form-control" id="name" required="" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Your Email <span>*</span></label>
                                    <input type="email" className="form-control" name="email" id="email" required="" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Subject <span>*</span></label>
                                <input type="text" className="form-control" name="subject" id="subject" required="" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Message <span>*</span></label>
                                <textarea className="form-control" name="message" rows="10" required=""></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center">
                                <button type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};


const SocialLinks = props => {
    return (
        <div className="social">
            <a
                href="https://twitter.com/yagoestevez"
                target="_blank"
                rel="noopener noreferrer"
                title="Link to author's Twitter profile"
            >
                {' '}
                <i className="fab fa-twitter" />
            </a>
            <a
                id="profile-link"
                href="https://github.com/yagoestevez"
                target="_blank"
                rel="noopener noreferrer"
                title="Link to author's GitHub Profile"
            >
                {' '}
                <i className="fab fa-github" />
            </a>
            <a
                href="https://codepen.io/yagoestevez"
                target="_blank"
                rel="noopener noreferrer"
                title="Link to author's Codepen Profile"
            >
                {' '}
                <i className="fab fa-codepen" />
            </a>
        </div>
    );
};


class App extends React.Component {
    state = {
        menuState: false
    };

    toggleMenu = () => {
        this.setState(state => ({
            menuState: !state.menuState
                ? 'active'
                : state.menuState === 'deactive'
                    ? 'active'
                    : 'deactive'
        }));
    };

    render() {
        return (
            <React.Fragment>
                <Menu toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
                <Nav toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
                <Header />
                <About />
                <Skills />
                <Contact />
                {/*<Projects/>*/}
                {/*<Footer/>*/}
            </React.Fragment>
        );
    }

    componentDidMount() {
        const navbar = document.querySelector('#navbar');
        const header = document.querySelector('#welcome-section');
        const forest = document.querySelector('.forest');
        const silhouette = document.querySelector('.silhouette');
        let forestInitPos = -300;

        window.onscroll = () => {
            let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

            if (scrollPos <= window.innerHeight) {
                silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
                forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
            }

            if (scrollPos - 100 <= window.innerHeight)
                header.style.visibility = header.style.visibility === 'hidden' && 'visible';
            else header.style.visibility = 'hidden';

            if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');
            else navbar.classList.remove('bg-active');
        };

        (function navSmoothScrolling() {
            const internalLinks = document.querySelectorAll('a[href^="#"]');
            for (let i in internalLinks) {
                if (internalLinks.hasOwnProperty(i)) {
                    internalLinks[i].addEventListener('click', e => {
                        e.preventDefault();
                        document.querySelector(internalLinks[i].hash).scrollIntoView({
                            block: 'start',
                            behavior: 'smooth'
                        });
                    });
                }
            }
        })();
    }
}

export default App
