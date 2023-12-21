import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rhome from "./Rhome";
import Rpage1 from "./Rpage1";
import Rpage2 from "./Rpage2";
import Rnav from "./Rnav";

export default function RMain() {
  return (
    <main className="container">
      <BrowserRouter>
      <Rnav />
        <Routes>
            <Route path="/" element={<Rhome />} />
            <Route path="/page1" element={<page1 />} />
            <Route path="/page2" element={<page2 />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}
