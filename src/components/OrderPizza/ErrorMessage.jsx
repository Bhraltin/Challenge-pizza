

export default function ErrorMessages({ errors }) {
  return (
    <div>
      {errors.map((error, index) => (
        <p key={index} style={{ color: 'red' }}>
          {error}
        </p>
      ))}
    </div>
  );
};


