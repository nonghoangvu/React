import { Container } from "@mui/material";
import Navbar from "./template/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage";


function App() {
  return (
    <div>
      <Container>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
