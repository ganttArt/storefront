import Header from './components/Header';
import Categories from './components/Categories';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <main>
        <Categories />
        <Products />
      </main>
      <Footer />
    </div>
  );
}

export default App;
