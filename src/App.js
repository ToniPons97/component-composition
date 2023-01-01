import './App.css';
import { Container } from './components/Container';

function App() {
  return (
    <Container title={<h1>Component Composition 02!</h1>}>
      <div>Child 1</div>
      <div>Child 2</div>
      <div>Child 3</div>
      <div>Child 4</div>
    </Container>
  );
}

export default App;
