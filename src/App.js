import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import {privateRoutes,publicRoutes} from '~/routes';
import Header from './headers/Header';
import NavBar from '~/navbar/index';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import Loading from './utils/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { isSuccess } from './redux/slice/auth';
function App() {
 
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isSuccess());
  },[]);

  const cache = useRef({});

  return (
    <Router>
      <div className="app">
      <HelmetProvider>
        <Helmet>
          <title>KASUGA MOVIE</title>
          <meta name='description' content="Movie website" />
        </Helmet>
      </HelmetProvider>
        <Header />
        <NavBar />
          <Routes>
            <Route path='/' exact element={<Home cache={cache}/>} />
              {publicRoutes.map((item,index) => {
                const Page = item.component;
                return <Route key={index + "as"} path={item.path} element={item?.admin ? auth.user?.accessToken && <Page cache={cache}/> : <Page cache={cache}/>} />
              })}
          </Routes>
      </div>
      <ToastContainer autoClose={1000} style={{fontSize:"1.5rem"}}/>
      {auth.loading && <Loading />}
    </Router>
  );
}

export default App;
