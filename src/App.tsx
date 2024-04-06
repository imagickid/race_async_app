import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Garage from './pages/Garage';
import Winners from './pages/Winners';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="garage" />} />
        <Route path="/" element={<AppLayout />}>
          <Route path="garage" element={<Garage />} />
          <Route path="winners" element={<Winners />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
