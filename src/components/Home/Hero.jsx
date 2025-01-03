import "./Hero.css"
export default function Hero({setOrderStep}) {
    return (
        <div className="hero">
            <div className="hero-container">
                <p id="deal">Fırsatı kaçırma</p>
                <div className="hero-main">
                    <p>Kod Acıktırır</p>
                    <p>Pizza Doyurur</p>
                </div>
                <button type="button" className="hero-button"  onClick={() => setOrderStep("order")} >Acıktım</button>
            </div>
        </div>
    )
}