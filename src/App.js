import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Shop from "./Pages/Shop/Shop";
import "./App.css";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={Shop} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
