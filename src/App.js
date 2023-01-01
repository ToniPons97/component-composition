import './App.css';
import { Container } from './components/Container';
import { Child } from './components/Child';

function App() {
  return (
    <Container title={<h1>Component Composition 02!</h1>}>
      <Child index={1} />
      <Child index={2} />
      <Child index={3} />
      <Child index={4} />
      <Child index={5} />
    </Container>
  );
}

export default App;
