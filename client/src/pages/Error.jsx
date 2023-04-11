import { Link } from "react-router-dom";
import ErrorImg from "../assets/images/error.svg";
import Wrapper from "../assets/wrappers/ErrorWrapper";
import { motion } from 'framer-motion'

export default function ErrorPage() {
return (
        <Wrapper>
            <div id="error-page">
                <h1>Oops!</h1>
                <p>Page not found</p>
                <img src={ErrorImg} alt="error" />
           
                <div className="animation-container">
                    <motion.button
                        className="box"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                    >
                        <Link to="/" className="homeLink">Take me home</Link>
                    </motion.button>
                </div>
            </div>
        </Wrapper>
    );
}