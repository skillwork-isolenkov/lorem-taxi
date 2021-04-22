import AppRouter from "./AppRouter";
import Footer from "./Components/Footer";
import MyProjects from "./Components/MyProjects/MyProjects";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <AppRouter />
      <Footer />
      <MyProjects />
    </div>
  );
}

export default App;
