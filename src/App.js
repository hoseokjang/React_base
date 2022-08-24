import './App.css';
import Day from './component/Day';
import DayList from './component/DayList';
import Header from './component/Header';
import EmptyPage from './component/EmptyPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<DayList />}></Route>
          <Route path="/day/:day" element={<Day />}></Route>
          <Route path="/create_word" element={<CreateWord />}></Route>
          <Route path="/create_day" element={<CreateDay />}></Route>
          <Route path="*" element={<EmptyPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

