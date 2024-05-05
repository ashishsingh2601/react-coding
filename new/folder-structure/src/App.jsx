import "./App.css";
import FolderStruct from "./components/FolderStruct";
import explorer from './data/data'

function App() {
  return (
    <main>
      <FolderStruct structure={explorer} />
    </main>
  );
}

export default App;
