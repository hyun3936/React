
import './App.css';
import LogoM from './01/LogoM';
import ClockMain from './02/ClockMain';
import FrontEnd from './03/FrontEnd';
import Lotto from './05/Lotto';
import BoxOffice from './06/BoxOffice';
// import Frcst from './07/Frcst';
//import Frcst2 from './07/Frcst2';
//import RefTest from './08/RefTest';
//import Traffic from './09/Traffic';
//import Gallery from './10/Gallery';
// import BusanFestival from './10/BusanFestival';
//import RMain from './12/RMain';
// import Fcst from './13/Fcst';
// import Ex01 from './90/Ex01';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DivMain from './14/DivMain';
import DivRecoilMain from './15/DivRecoilMain';



function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col w-full max-w-screen-xl mx-auto h-screen'>
        <nav className="flex items-center justify-between  w-full  flex-wrap h-20 bg-teal-500 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
            <span className="font-semibold text-xl tracking-tight">K-Digital 5기</span>
          </div>


          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm">
              <Link to="/ ">LogoM </Link>
              <Link to="/clock ">ClockMain </Link>
              <Link to="/front ">FrontEnd </Link>
              <Link to="/lotto ">로또 </Link>
              <Link to="/boxoffice ">박스오피스 </Link>
              <Link to="/divMain ">probs예제 </Link>
              <Link to="/recoilMain ">Recoil예제 </Link>
            </div>
            <div>
              <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">윤석현</a>
            </div>
          </div>
        </nav>

        <main className='w-full overflow-y-auto bg-slate-400'> 
        test
          <Routes>
            <Route path="/" element={<LogoM />} />
            <Route path="/clock" element={<ClockMain />} />
            <Route path="/front" element={<FrontEnd />} />
            <Route path="/lotto" element={<Lotto />} />
            <Route path="/boxoffice" element={<BoxOffice />} />
            <Route path="/divMain" element={<DivMain />} />
            <Route path="/recoilMain" element={<DivRecoilMain />} />
          </Routes>
        </main>
      </div >
    </BrowserRouter>
  );
}

export default App;
