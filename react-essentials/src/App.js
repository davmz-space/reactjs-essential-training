import './App.css';

function Header(props) {
  console.log(props);

  return (
    <header>
        <h1>{props.name}'s' Kitchen</h1>
        {/* <h1>Eve's Kitchen</h1> */}
    </header>
  )
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      {/* <p>We serve the most delicious food around.</p> */}
    </section>
  )
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
      {/* <p>It's true.</p> */}
    </footer>
  )
}

function App() {
  return (
    <div className="App">
      {/* <h1>Header</h1> */}
      <Header name="David" />

      {/* <h2>Main</h2> */}
      <Main adjective="amazing" />

      {/* <h3>Footer</h3> */}
      <Footer year={ new Date().getFullYear() } />
    </div>
  );
}

export default App;
