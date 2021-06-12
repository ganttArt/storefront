import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Categories from './components/Categories';
import Products from './components/Products';
import Footer from './components/Footer';

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
            <h1>Cart</h1>
          </Route>
          <Route path="/productDetail">
            <h1>Product Detail</h1>
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
