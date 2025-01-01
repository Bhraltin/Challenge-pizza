export default function Miktar({ sayi, setSayi }) {
    return (
      <div className="sayi">
        <button onClick={() => setSayi(Math.max(1, sayi - 1))}>-</button>
        <span>{sayi}</span>
        <button onClick={() => setSayi(sayi + 1)}>+</button>
      </div>
    );
  }
  