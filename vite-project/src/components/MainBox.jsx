export function MainBox({ onsetActive, activeItem }) {
  const active = activeItem.slice(0, 1).toUpperCase() + activeItem.slice(1);

  return (
    <section className="main__box">
      <article className="main__info">
        <div className="main__img">
          <img src="./images/image-jeremy.png" alt="jeremy" />
        </div>
        <p className="img__info">
          <span>Report for</span>
          <span className="img__name">Jeremy Robson</span>
        </p>
      </article>
      <ul className="link__items">
        {["Daily", "Weekly", "Monthly"].map((item, i) => (
          <li
            className={`item ${item === active ? "active" : ""}`}
            key={i}
            onClick={() => onsetActive(item.toLowerCase())}
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
