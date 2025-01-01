export default function Siparis({ toplam, onSubmit }) {
    return (
      <div className="sipariş">
        <h3>Sipariş Toplamı</h3>
        <p>Seçimler {toplam}₺</p>
        <p>Toplam {toplam}</p>
      </div>
    );
  }
  