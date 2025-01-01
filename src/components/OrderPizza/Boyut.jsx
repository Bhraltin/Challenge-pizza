import "./Boyut.css"
export default function Boyut({ size, onChange }) {
    const boyutlar = ["Küçük", "Orta", "Büyük"];
    return (
      <div className="size">
        <h3>Boyut Seç *</h3>
        {boyutlar.map((boyut) => (
          <label key={boyut}>
            <input
              type="radio"
              value={boyut}
              checked={size === boyut}
              onChange={(e) => onChange(e.target.value)}
            />
            {boyut}
          </label>
        ))}
      </div>
    );
  }
  