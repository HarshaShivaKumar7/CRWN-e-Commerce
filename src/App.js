import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import "./App.css";

const Hats = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>HATS</h1>
        </div>
    );
};
const Jackets = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>JACKETS</h1>
        </div>
    );
};
const Sneakers = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>SNEAKERS</h1>
        </div>
    );
};
const Womens = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>WOMENS</h1>
        </div>
    );
};
const Mens = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>MENS</h1>
        </div>
    );
};

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/hats" component={Hats} />
                    <Route path="/jackets" component={Jackets} />
                    <Route path="/sneakers" component={Sneakers} />
                    <Route path="/womens" component={Womens} />
                    <Route path="/mens" component={Mens} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
