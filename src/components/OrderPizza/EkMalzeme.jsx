import { useState } from "react";

const malzemeler = [
    "Pepperoni", "Tavuk Izgara", "Mısır", "Sarımsak", "Ananas", 
    "Sosis", "Soğan", "Sucuk", "Biber", 
    "Kabak", "Kanada Jambonu", "Domates", "Jalepeno"
  ];
export default function EkMalzeme() {
    const [data, setData] = useState([]);
  
    function handleChange(event) {
        const value = event.target.value;
        if(data.includes(value)) {
         setData(data.filter(ek => ek !== value) )
        } else {
            setData([...data, value])
        }
      
    }
   
    return (
      <div className="ek-secim">
        <h3>Ek Malzemeler</h3>
        <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
        {malzemeler.map((malzeme) => (
          <label key={malzeme}>
            <input
              type="checkbox"
          
              onChange={handleChange}
            />
            {malzeme}
          </label>
        ))}
      </div>
    );
  }
  