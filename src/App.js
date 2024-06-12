import Container from "./components/Container";

import { bgImage } from "./assets";

function App() {
  return (
    <div className="text-white">
      <img src={bgImage} alt="background" />
      <Container />
    </div>
  );
}

export default App;
