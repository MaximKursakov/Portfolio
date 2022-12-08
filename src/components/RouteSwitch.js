import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./Main";
import { Origami } from "./Origami";

export function RouteSwitch() {
    return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/origami" element={<Origami/>} />
      </Routes>
    </BrowserRouter>
    )
}