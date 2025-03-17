function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline font-sans text-orange-400">
        Hello world!
      </h1>
      <div className="border-2 border-solid border-black h-50 w-70 shadow-xl shadow-orange-400 bg-orange-400 rounded-box"></div>
      <button className="btn btn-soft">Default</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-soft btn-primary">Primary</button>
      <button className="btn btn-soft btn-secondary">Secondary</button>
      <button className="btn btn-soft btn-accent">Accent</button>
      <button className="btn btn-soft btn-info">Info</button>
      <button className="btn btn-soft btn-success">Success</button>
      <button className="btn btn-soft btn-warning">Warning</button>
      <button className="btn btn-soft btn-error">Error</button>
    </>
  );
}

export default App;
