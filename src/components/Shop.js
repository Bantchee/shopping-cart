import Product from "./Product";

const Shop = ({ products }) => {
    return (
      <div>
        {
          products.map((product, index) => {
            return <Product id={index} name={product.name} img={product.img} price={product.price} />
          })
        }
      </div>
    );
  }
  
  export default Shop;