import TextEditor from "./TextEditor";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavigateDocument from "./NavigateDocument";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/documents/:id" element={<TextEditor />}></Route>
        <Route path="/" exact element={<NavigateDocument />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
