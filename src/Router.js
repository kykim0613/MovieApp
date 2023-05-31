import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import Main from "./pages/Main"
import Header from "./components/Header";
import Book from "./pages/Book";
import Auth from "./components/Auth";
import CreateAccount from "./components/CreateAccount";

const Router = (auth) => {
    return (
        <BrowserRouter>
            <Header />
            <Outlet />
            <Routes>
                <Route path="/" element={<Main auth={auth} />} />
                <Route path="/Book" element={<Book auth={auth} />} />
                <Route path="/Auth" element={<Auth />} />
                <Route path="/CreateAccount" element={<CreateAccount />} />
            </Routes>

        </BrowserRouter>
    )
}

export default Router;