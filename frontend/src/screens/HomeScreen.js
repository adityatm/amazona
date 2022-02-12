import { Link } from 'react-router-dom';
import Data from '../data';

function HomeScreen() {
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {Data.products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <p>
                {' '}
                <Link to={`/product/${product.slug}`}>{product.name}</Link>
              </p>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button type="button">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeScreen;
