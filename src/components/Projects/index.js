import { useEffect } from 'react';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const Projects = () => {
    useEffect(() => {
        document.title = 'Norberto Merani | Projects';
    }, []);

    return (
        <div className = 'container projects-page'>
            <div className = 'text-zone'>
                <h1>
                    <AnimatedLetters 
                        strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                        idx = {15}
                    />
                </h1>
                <p>
                    At the moment, there are no projects that I can post on this page, but I am working on a Python program 
                    that can take an input string and encrypt/decrypt it.
                </p>
            </div>
        </div>
    )
}

export default Projects