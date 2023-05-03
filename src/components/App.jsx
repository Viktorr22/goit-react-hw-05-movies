import { NavLink, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink>Home</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
      </Routes>
    </div>
  );
};
