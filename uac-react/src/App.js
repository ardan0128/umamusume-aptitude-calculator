import { Route, Routes } from 'react-router-dom';
import ListUmamusume from './pages/ListUmamusume';

import Main from './pages/Main';
import DetailUmamusume from './pages/DetailUmamusume';

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Main />}></Route>
      <Route path="/umamusume" element={<ListUmamusume />}></Route>
      <Route path="/umamusume">
        <Route path=":id" element={<DetailUmamusume />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
