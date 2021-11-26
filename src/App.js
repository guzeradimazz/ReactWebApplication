import React from "react";
import { BrowserRouter,Route,Switch,Redirect } from "react-router-dom";
import MainPage from "./components/pages/MainPage/MainPage";
import PostIdPage from "./components/pages/PostIdPage/PostIdPage";
import './styles/App.css';
import './styles/Media.css';

function App() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <MainPage/>
                </Route>
                <Route exact path='/:id'>
                    <PostIdPage/>
                </Route>
                <Redirect to='/'/>
            </Switch>
        </BrowserRouter>
    )
}
export default App;
