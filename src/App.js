import { Switch, Route, BrowserRouter } from "react-router-dom";
import { auth, createUserProfileDocument } from "./Firebase/firebase.utils";
import HomePage from "./Pages/HomePage/HomePage";
import Shop from "./Pages/Shop/Shop";
import Header from "./Components/Header/Header";
import SignInSignUp from "./Pages/SignInSignUp/SignInSignUp";
import "./App.css";
import React from "react";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentUser: null,
        };
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot((snapShot) => {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data(),
                        },
                    });
                    // console.log(this.state);
                });
            }
            this.setState({ currentUser: userAuth });
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header currentUser={this.state.currentUser} />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/shop" component={Shop} />
                        <Route path="/signin" component={SignInSignUp} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
