import Header from './Components/Header/Header';
import MainPage from './Pages/MainPage/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EventPage from './Pages/EventPage/EventPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import { store } from './store/store';
import { Provider } from 'react-redux';
import ProfilePage from './Pages/ProfilePage/ProfilePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/login' element={<MainPage />} />
            <Route path='/register' element={<MainPage />} />
            <Route path='/events'>
              <Route path=':id' element={<EventPage />} />
            </Route>
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
