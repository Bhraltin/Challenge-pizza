import "./Hamur.css"
export default function Hamur({ hamur, onChange }) {
    return (
      <div className="hamur-sec">
        <h3>Hamur Seç *</h3>
        <select value={hamur} onChange={(e) => onChange(e.target.value)}>
          <option disabled>Hamur Kalınlığı</option>
          <option>İnce</option>
          <option>Orta</option>
          <option>Kalın</option>
        </select>
      </div>
    );
  }
  