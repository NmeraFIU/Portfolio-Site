import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idk}) => {
    return (
        <span>
            {
                strArray.map((char, i) => (
                    <span key = {char + i} className = {`${letterClass} _${i + idk} `}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
};

export default AnimatedLetters