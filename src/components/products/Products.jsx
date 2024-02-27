/* eslint-disable react/prop-types */
import Item from "./Item";

const Products = ({ state }) => {
  //   if (!state) {
  //     return <h1>Loading...</h1>;
  //   }
  //   if (!state.length) {
  //     return <p>Sorry, no products found.</p>;
  //   } else {
  //     return (
  //       <ul>
  //         {state.map((product) => {
  //           return <Item key={product.id} {...product} />;
  //         })}
  //       </ul>
  //     );
  //   }
  return (
    <>
      {!state ? (
        <h1>Loading....</h1>
      ) : !state.length ? (
        <p>Sorry, no products found.</p>
      ) : (
        <ul>
          {state.map((product) => {
            return (
              <>
                <Item {...product} />
              </>
            );
          })}
        </ul>
      )}
    </>
  );
};
export default Products;
