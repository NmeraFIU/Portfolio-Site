import { useEffect } from 'react';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
    useEffect(() => {
        document.title = 'Norberto Merani | About';
    }, []);

    return (
        <div className = 'container about-page'>
            <div className = 'text-zone'>
                <h1>
                    <AnimatedLetters 
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx = {15}
                    />
                </h1>
                <p>
                    My family and I immigrated to America back in 2007, where I enrolled in a public college to study 
                    computer science. I am knowledgable in Java, JavaScript, C, C#, C++, Python, HTML, CSS, R, SQL, and am 
                    learning Rust. For web development, I am most experienced with React and have a bit of experience with 
                    Bootstrap. You can see my current projects <a href = "/projects">here</a>.
                </p>
                <p>
                    Watching movies and TV shows is a past time of mine whenever I have free time, 
                    and I also like making art occasionally. 

                </p>
            </div>
        </div>
    )
}

export default About