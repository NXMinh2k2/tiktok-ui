import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { publicRoutes } from '~/routes';
import Following from './pages/Following';
import Home from './pages/Home';
import Profile from './pages/Profile';
import DefaultLayout from './components/Layout/DeFaultLayout';
import Upload from './pages/Upload';
import Header from './components/Layout/components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <DefaultLayout>
                <Home />
              </DefaultLayout>
            }
          />
          <Route
            path="/following"
            element={
              <DefaultLayout>
                <Following />
              </DefaultLayout>
            }
          />
          <Route
            path="/profile"
            element={
              <DefaultLayout>
                <Profile />
              </DefaultLayout>
            }
          />
          <Route
            path="upload"
            element={
              <>
                <Header />
                <Upload />
              </>
            }
          />

          {/* {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })} */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
