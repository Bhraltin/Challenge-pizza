

import Cards from "./Cards"
import Hero from "./Hero"
import "./Home.css"
import Icon from "./Icon"
export default function Home({setOrderStep}) {
    return (
        <div className="home">
            <div className="img">
            <img src="../public/home-banner.png"/>
            <Hero setOrderStep={setOrderStep}/>
            </div>
             <Icon/>
            <Cards/>
        </div>
       
    )
}