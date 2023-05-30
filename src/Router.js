import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import Main from "./pages/Main"
import Header from "./components/Header";
import Book from "./pages/Book";
import Auth from "./components/Auth";
import CreateAccount from "./components/CreateAccount";

const Router = () => {
    return (
        <BrowserRouter>
        <Header />
        <Outlet/>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Book" element={<Book />} />
            <Route path="/Auth" element={<Auth />} />
            <Route path="/CreateAccount" element={<CreateAccount />} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router;