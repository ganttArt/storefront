import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Categories from './components/Categories';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
// import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Categories />
            <Products />
          </Route>
          <Route path="/cart">
            <ShoppingCart />
          </Route>
          <Route path="/products/:id">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
