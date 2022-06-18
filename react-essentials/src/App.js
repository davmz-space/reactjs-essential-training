import './App.css';

function Header() {
  return (
    <header>
        <h1>Eve's Kitchen</h1>
    </header>
  )
}

function Main() {
  return (
    <section>
      <p>We serve the most delicious food around.</p>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <p>It's true.</p>
    </footer>
  )
}

function App() {
  return (
    <div className="App">
      {/* <h1>Header</h1> */}
      <Header />

      {/* <h2>Main</h2> */}
      <Main />

      {/* <h3>Footer</h3> */}
      <Footer />
    </div>
  );
}

export default App;
