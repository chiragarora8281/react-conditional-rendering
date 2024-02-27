/* eslint-disable react/prop-types */
const Item = ({
  category,
  title,
  image,
  price,
  rating: { rate, count },
  description,
}) => {
  return (
    <div>
      <header>
        <picture>
          <img src={image} alt={title} />
        </picture>
      </header>
      <main>
        <h3>{title}</h3>
        <p>{category}</p>
        <p>{price}</p>
        <p>{rate}</p>
        <p>{count}</p>
        <p>{description}</p>
      </main>
    </div>
  );
};

export default Item;
