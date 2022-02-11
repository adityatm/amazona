import Data from './data';

function App() {
  return (
    <div className="App">
      <header>
        <a href="/">Amazona</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="products">
          {Data.products.map((product) => (
            <div className="product" key={product.slug}>
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className="product-info">
                <p>
                  {' '}
                  <a href={`/product/${product.slug}`}>{product.name}</a>
                </p>
                <p>
                  <strong>${product.price}</strong>
                </p>
                <button type="button">Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
