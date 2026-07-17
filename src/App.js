import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

function Home() {
  return <h1>Most Famous DevOps Tools</h1>;
}

function Git() {
  return <h1>I am a Version Control Tool</h1>;
}

function Jenkins() {
  return <h1>I am a CI/CD Tool</h1>;
}

function Docker() {
  return <h1>I am a Containerization based Tool!</h1>;
}

function Four() {
  const { id } = useParams();

  return (
    <div>
      <h1>I am a Container Orchestration Tool!</h1>
      <a href="/">Click Here!</a>
      <h1>Thank You Have a Nice Day!!!</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Git" element={<Git />} />
        <Route path="/Jenkins" element={<Jenkins />} />
        <Route path="/Docker" element={<Docker />} />
        <Route path="/Four/:id" element={<Four />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;