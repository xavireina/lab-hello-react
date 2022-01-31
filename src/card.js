function Card(properties) {
    return (
      <div className="card">
        <img src={properties.src} alt="{properties.title}" />
        <h3>{properties.title}</h3>
        <p>{properties.text}</p>
      </div>
    );
}

export default Card;