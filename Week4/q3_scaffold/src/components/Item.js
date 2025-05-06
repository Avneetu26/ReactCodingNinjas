import itemStyles from "./item.module.css";

export default function Item({ item }) {
  return (
    <div className={itemStyles.container}>
      <h3 className={itemStyles.title}>{item.title}</h3>
      <img src={item.image} alt={item.title} className={itemStyles.image} />
      <p>
        <strong className={itemStyles.price}>${item.price}</strong>
      </p>
      <p>{item.description}</p>
    </div>
  );
}
