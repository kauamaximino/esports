interface ButtonProps{
  title?: string;
  onclick?: () => string;
}

function Button (props: ButtonProps) {
  return (
    <button>{props.title}</button>
  )
}

function App() {
  return (
    <div>
      <Button title="Click me"/>
      <Button title="Click me too"/>
      <Button title="Teste"/>
      <Button title="Teste 2"/>
    </div>
  )
}

export default App