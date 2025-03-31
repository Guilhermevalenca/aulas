import './app.css';

export default function() {
  let elemento = null;
  const condicao = false;

  if (condicao) {
    elemento = <h2>Condição verdadeira</h2>;
  }
  return (
    <div className="app-page">
      <h1>App</h1>
      {elemento && <div>{elemento}</div>}
    </div>
  );
}