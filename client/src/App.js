import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {refreshService} from "./services/authService";
import Loading from "./components/Loading/Loading";
import './App.css';
import ContentPage from "./pages/ContentPage/ContentPage";
import AuthPage from "./pages/AuthPage/AuthPage";

function App() {
    const {isAuth, isLoading} = useSelector(state => state.authSlice)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(refreshService())
    }, [])

    if (isLoading) return <Loading />

    if (isAuth) {
        return (
            <ContentPage/>
        )
    }
    return (
        <AuthPage/>
    )
}

export default App;
