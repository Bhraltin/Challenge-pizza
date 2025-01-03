import "./Footer.css"
export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <h2>Teknolojik Yemekler</h2>
                <p>
                    <img src="./public/icon-1.png" alt="konum"/>
                    341 Londonderry Road, Istanbul Türkiye
                </p>
                <p>
                    <img src="./public/icon-2.png" alt="message"/>
                    aciktim@teknolojikyemekler.com
                </p>
                <p>
                    <img src="./public/icon-3.png" alt="phone"/>
                    +90 216 123 45 67
                </p>
            </div>
            <div className="footer-menu">
              <h4>Sıccacık Menüler</h4>
              <p>Terminal Pizza</p>
              <p>5 Kişilik Hackathlon Pizza</p>
              <p>useEffect Tavuklu Pizza</p>
              <p>Beyaz Console Frosty</p>
              <p>Testler Geçti Mutlu Burger</p>
              <p>Position Absolute Acı</p>
            </div>
            <div className="insta">
                <h4>İnstagram</h4>
                <li>
                <img src="./public/insta/li-0.png"/>
                <img src="./public/insta/li-1.png"/>
                <img src="./public/insta/li-2.png"/>
                <img src="./public/insta/li-3.png"/>
                <img src="./public/insta/li-4.png"/>
                <img src="./public/insta/li-5.png"/>
                </li>
            </div>
        </div>
    )
}