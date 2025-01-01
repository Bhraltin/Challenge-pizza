import { useState } from "react";
import Boyut from "./Boyut";
import EkMalzeme from "./EkMalzeme";
import Hamur from "./Hamur";
import Miktar from "./Miktar";
import Not from "./Not";
import PizzaDetay from "./PizzaDetay";
import Siparis from "./Siparis";
import ErrorMessages from "./ErrorMessage";
import SiparisOzet from "./SiparisÖzet";
import "./OrderPizza.css"


export default function OrderPizza() {


  const [size, setSize] = useState('');
  const [hamur, setHamur] = useState('');
  const [malzeme, setMalzeme] = useState([]);
  const [sayi, setSayi] = useState(1);
  const [errors, setErrors] = useState([]);

  const handleOrder = () => {
    const newErrors = [];
    if (!size) newErrors.push('Lütfen pizza boyutunu seçin.');
    if (!hamur) newErrors.push('Lütfen hamur türünü seçin.');
    if (malzeme.length > 10) newErrors.push('En fazla 10 malzeme seçebilirsiniz.');
    setErrors(newErrors);
    if (newErrors.length === 0) {
      alert('Sipariş başarıyla oluşturuldu!');
    }
  }

return (

  <div className="order">
  <h1>Position Absolute Acı Pizza</h1>
  <PizzaDetay />
  <Boyut size={size} setSize={setSize}/>
  <Hamur hamur={hamur} setHamur={setHamur}/>
  <EkMalzeme malzeme={malzeme} setMalzeme={setMalzeme}/>
  <Not/>
  <Siparis/>
  <ErrorMessages errors={errors} />
  <Miktar sayi={sayi} setSayi={setSayi}/>
  <SiparisOzet size={size} dough={hamur} malzeme={malzeme} sayi={sayi}/>
  <button onClick={handleOrder}>Sipariş Ver</button>
  </div>
)
  }
