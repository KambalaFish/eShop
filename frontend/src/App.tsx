import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<h1>home</h1>} />
        <Route path={'/cart'} element={<h1>cart</h1>} />
        <Route path={'/order-history'} element={<h1>order history</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export { App };
