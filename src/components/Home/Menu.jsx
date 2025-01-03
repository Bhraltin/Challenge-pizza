import "./Menu.css"

export default function Menu({setOrderStep}) {
    return (
      <div className="images">
      <div className="kart kart1">
        <img src="./public/cta/kart-1.png" alt="özelLezzetus" />
        <div className="content">
          <p><strong>Özel Lezzetus</strong><br />Position: Absolute Acı Burger</p>
          <button onClick={(()=> setOrderStep("success"))}>Sipariş Ver</button>
        </div>
      </div>
      <div className="kart kart2">
        <img src="./public/cta/kart-2.png" alt="hackathlon" />
        <div className="content">
          <p><strong>Hackathlon Burger Menü</strong></p>
          <button onClick={(()=> setOrderStep("success"))}>Sipariş Ver</button>
        </div>
      </div>
      <div className="kart kart3">
        <img src="./public/cta/kart-3.png" alt="npm" />
        <div className="content">
          <p><strong>Çoooook hızlı npm kurye</strong></p>
          <button onClick={(()=> setOrderStep("success"))}>Sipariş Ver</button>
        </div>
      </div>
    </div>
    )
}