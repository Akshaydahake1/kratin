// import './App.css';

// function App() {
//   return (
//    <div>
//     <h1>hii hello3</h1>
//    </div>
     
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Signin from './componentss/signin';
import { ToastContainer } from 'react-toastify';
import Signup from './componentss/signup';

import UserData from './componentss/userdata';
import HealthHistory from './componentss/heathhistory';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
      <Route  path="/" element={<Signin/>} />
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/adddetails' element={<UserData/>} />
        <Route path='/history' element={<HealthHistory/>} />

      </Routes>
      
    </div>
    <ToastContainer position='top-center' autoClose={1500} />
    </BrowserRouter>
  );
}

export default App;