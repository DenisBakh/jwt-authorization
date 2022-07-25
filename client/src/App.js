import './App.css';
import AuthPage from "./pages/AuthPage/AuthPage";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {refreshAuthService} from "./services/authService";

function App() {
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.AuthReducer.isLoading)

    useEffect(() => {
        dispatch(refreshAuthService())
    }, [])

    if (isLoading) return <h1>Loading...</h1>

    return (
        <div style={{padding: '30px'}}>
          <AuthPage/>
        </div>
    );
}

export default App;
