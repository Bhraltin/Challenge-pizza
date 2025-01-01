import "./Home.css"
export default function Home({ handleSayfa }) {
    return (
        <div className="home">
            <div className="img">
            <img src="../public/home-banner.png"/>
            <div className="yazi">
            <p style={{fontSize:"2rem"}}>KOD ACIKTIRIR</p>
             <p style={{fontSize:"2rem"}}>PİZZA, DOYURUR</p>
            <button className="siparis" type="button" onClick={handleSayfa}>Sipariş Ver</button> 
            </div>
            </div>
        </div>
    )
}