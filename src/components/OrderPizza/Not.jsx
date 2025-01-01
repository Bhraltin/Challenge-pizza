export default function Not({ note, onChange }) {
    return (
      <div className="not">
        <h3>Sipariş Notu</h3>
        <textarea
          value={note}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Siparişine eklemek istediğin bir not var mı?"
        />
      </div>
    );
  }
  