

export default function SiparisOzet({ size, hamur, malzeme, sayi}) {
  const fiyat = 85.5;
  const ekfiyat = malzeme.length * 5;
  const toplamFiyat = (fiyat + ekfiyat) * sayi;

  return (
    <div>
      <h3>Sipariş Toplamı</h3>
      <p>Seçimler: {fiyat + ekfiyat}₺</p>
      <p>Toplam: {toplamFiyat.toFixed(2)}₺</p>
    </div>
  );
};


