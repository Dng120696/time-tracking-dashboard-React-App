import { Box } from "./Box";

export function Boxes({ data, activeItem }) {
  return (
    <section className=" grid__boxes boxes">
      {data.map((box) => (
        <Box
          key={box.title}
          title={box.title}
          timeframes={box.timeframes}
          activeItem={activeItem}
        />
      ))}
    </section>
  );
}
