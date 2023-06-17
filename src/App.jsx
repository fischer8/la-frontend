import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage, Photos, About, NotFound, Suites, Contact, Login } from './pages'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<MainPage/>} />
        <Route exact path='/home' element={<MainPage/>} />
        <Route exact path='/fotos' element={<Photos/>} />
        <Route exact path='/suites' element={<Suites/>} />
        <Route exact path='/sobre' element={<About/>} />
        <Route exact path='/contato' element={<Contact/>} /> 
        <Route exact path='/login' element={<Login/>} />        
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}
