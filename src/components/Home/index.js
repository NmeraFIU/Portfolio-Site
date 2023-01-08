import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {
    useEffect(() => {
        document.title = 'Norberto Merani | Home';
    }, []);

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['N', 'o', 'r', 'b', 'e', 'r', 't', 'o', ' ', 'M', 'e', 'r', 'a', 'n', 'i', ',']
    const jobArray = ['A', ' ', 'p', 'r', 'o', 'g', 'r', 'a', 'm', 'm', 'i', 'n', 'g', ' ', 's', 't', 'u', 'd', 'e', 'n', 't']

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm <AnimatedLetters letterClass={letterClass}
                strArray = {nameArray}
                idx = {15}/> <br /> {jobArray}</h1>
                <h2>I am a full-stack developer based in Doral, Miami, FL. If you would like to see my projects
                      that I am currently working on you can check the "projects" tab
                       or click <a href = "/projects">here</a> </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

        </div>
    )
}

export default Home;
