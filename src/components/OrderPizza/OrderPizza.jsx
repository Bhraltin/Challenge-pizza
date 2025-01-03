import { useEffect, useState } from "react";
import "./OrderPizza.css";
import { pizza } from "../Pizzadata";
import axios from "axios";


const bilgiler = {
  size: "",
  kalinlik: "default",
  extra: [],
  not: "",
  name: "",
}

export default function OrderPizza({pizza, setOrderStep}) {
const [order, setOrder] = useState(bilgiler);
const [error, setError] = useState({});
const [amount, setAmount] = useState(1);
const [isDisabled, setIsdisabled] = useState(true);

const extraPrice = order.extra.length * 5;
const totalPrice = amount * (pizza.price.slice(0, -1) + extraPrice);


function formValidation() {
  const newErrors = {};
  if(!order.size) newErrors.size = "Lütfen pizza boyutunu seçiniz";
  if(order.kalinlik === "default") 
    newErrors.kalinlik = "Lütfen hamur kalınlığını seçiniz";
  if(order.name.length <5)
    newErrors.name = "Lütfen geçerli bir isim giriniz"
  if (order.extra.length < 4) 
    newErrors.extra = "Lütfen en az 4 adet malzeme seçiniz"
  setError(newErrors);
  setIsdisabled(Object.keys(newErrors).length > 0);
}
useEffect(() => {
  formValidation();
}, [order]);

function handleSubmit(e) {
e.preventDefault();
axios.get("https://reqres.in/api/pizza", order)
.then(response => {
  setOrderStep("success");
  console.log(response)
})
.catch(error =>
  console.warn(erro)
)
}

 
function handleExtre(e) {
  if(order.extra.length === 10 && e.target.checked===true) {
    alert("En fazla 10 adet seçim yapabilirsiniz");
  return;
}

setOrder((prev) => ({
  ...prev,
  extra: prev.extra.includes(e.target.value)
  ? prev.extra.filter((el) => el !== e.target.value)
  : [...prev.extra, e.target.value],
}));


}


return (

  <div className="order-page">
    <div className="image">
      <img src="../public/pictures/food-2.png"/>
    </div>
  <h1>Position Absolute Acı Pizza</h1>
  <p>{pizza.description}</p>
<form className="order-form" handleSubmit={handleSubmit}>
  <section className="order-pizza">
    <div className="boyut">
      <h3>Boyut Seç</h3>
      {error.size && <p className="order-error">{error.size}</p>}
      {pizza.boyutlar.map((boyut)=> (
        <label htmlFor={boyut} key={boyut}>
          <input 
          type="radio"
          id={boyut}
          value={boyut}
          checked={order.size === boyut}
          name="pizzaSize"
          onChange={(e) => setOrder({...order, size: e.target.value})}/>
          {boyut.charAt(0).toUpperCase() + boyut.slice(1)}
        </label>
      ))}
    </div>
<div className="boyut">
  <h3>Hamur Kalınlığı</h3>
  {error.kalinlik && <p className="order-error">{error.kalinlik}</p>}
<select
value={order.kalinlik}
onChange={(e) => setOrder({...order, kalinlik: e.target.value})}>
<option value="default">
  ---Hamur Kalınlığı Seç---
</option>
<option name="thin">İnce</option>
<option name="thick">Kalın</option>
</select>
</div>
  </section>
  <section>
    <h3>Ek Malzemeler</h3>
    {error.extra && <p className="order-error">{error.extra}</p>}
    <p>En fazla 10 malzeme seçebilirsiniz 5₺</p>
    <div className="ekler">
  {pizza.malzemeler.map((malzeme) => (
    <label key={malzeme}>
<input 
type="checkbox"
id="extras"
checked={order.extra.includes(malzeme)}
value={malzeme}
onChange={handleExtre} />
{malzeme.charAt(0).toUpperCase() + malzeme.slice(1)}
    </label>
  ))}
    </div>
  </section>
  <section>
    <label htmlFor="name">İsim Soyisim
    <input 
    id="name"
    type="text"
    value={order.name}
    onChange={(e)=> setOrder({...order, name: e.target.value})}
    placeholder="isim-soyisim" />
    </label>
    {error.name && <p className="order-error">{error.name}</p>}
    <h3>Sipariş Notu</h3>
    <textarea
    placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
    value={order.not}
    onChange={(e)=> {
      setOrder({...order, not: e.target.value})
    }}/>
  </section>
  <div className="arti-eksi">
  <button className="button-amount-change"
  type="button"
  onClick={()=>setAmount(amount-1)}>-
  </button>{amount}
  <button className="button-amount-change"
  type="button"
  onClick={()=>setAmount(amount+1)}>+
  </button>

  <div className="order-summary">
    <h3>Sipariş Özeti</h3>
    <div>
      <p>Seçimler</p>
      <p>{extraPrice}₺</p>
    </div>
    <p>Toplam</p>
    <p>{totalPrice}</p>
  </div>
  </div>
<button className="button-form-submit"
type="submit"
disabled={isDisabled}
onClick={(()=>setOrderStep("success"))}
>
  Onayla
</button>


</form>
  </div>









)
  


}
