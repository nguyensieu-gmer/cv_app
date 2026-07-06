export function Action({ clearResume, loadExample }) {
  return (
    <div>
      <button onClick={clearResume}>Clear resume</button>
      <button onClick={loadExample}>Load example</button>
    </div>
  );
}
