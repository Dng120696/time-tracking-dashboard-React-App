export function Box({ title, timeframes, activeItem }) {
  const currentTime = timeframes[activeItem].current;
  const previousTime = timeframes[activeItem].previous;
  const active =
    activeItem === "daily"
      ? "Day"
      : activeItem === "weekly"
      ? "Week"
      : activeItem === "monthly"
      ? "Month"
      : null;

  return (
    <div className={`box box__${title.split(" ")[0].toLowerCase()}`}>
      <div className="box__header">
        <div>
          <h3 className="box__title">{title}</h3>
          <img src="./images/icon-ellipsis.svg" alt="icon" />
        </div>
        <div>
          <h1 className="current__time">{currentTime}hrs</h1>
          <p className="previous__time">
            Last {active} - {previousTime}hrs
          </p>
        </div>
      </div>
    </div>
  );
}
