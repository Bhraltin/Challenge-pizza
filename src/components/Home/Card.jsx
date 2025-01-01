import CardBoyut from "./Card-boyut";

export default function Card() {
    return (
       <div className="card">
        <h1>Position Absolute Acı Pizza</h1>
        <div className="card-details">
            <span>85.50₺</span>
            <span>4.9</span>
            <span>(200)</span>
            <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
        </div>
        <CardBoyut/>
       </div>
    )
}