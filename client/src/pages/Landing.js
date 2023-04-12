import coffeeLogo from "../assets/images/coffee.svg"
import barista from "../assets/images/barista.svg"
import Wrapper from '../assets/wrappers/LandingWrapper'
import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <Wrapper>
        <div className="containing">
            <nav>
                <Link to="/dashboard"><img src={coffeeLogo} className="logo" alt="logo" /></Link>
            </nav>
            <div className="container page">
                <div className="info">
                    <h2>organization for <span>coffeeshop enthusiasts</span></h2>
                    <p>cinnamon strong siphon instant dark espresso whipped mocha pumpkin spice con panna half and half doppio seasonal. trifecta, mug, caffeine barista est fair trade iced. dsoppio latte, ut that, extraction, single origin robust, grounds, shop, steamed frappuccino body, id kopi-luwak, qui froth caramelization arabica fair trade.</p>
                    <Link to="/register" alt="to register" className="btn btn-hero">login/register</Link>
                </div>
                <img src={barista} alt="coffeeshop" className="img main-img" />
            </div>
        </div>
    </Wrapper>
  )
}

export default Landing

// <a href="https://iconscout.com/icons/coffee" target="_blank">Coffee Emoji Icon</a> by <a href="https://iconscout.com/contributors/twitter-inc" target="_blank">Twitter Emoji</a>