import React from "react";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import { auth, signInWithGoogle } from "../../Firebase/firebase.utils";
import "./SignIn.scss";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }
    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: "", password: "" });
        } catch (error) {
            console.log(error);
        }
    };
    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an Account</h2>
                <span>Sign In with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        label="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        label="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                    />
                    <div className="buttons">
                        <Button type="submit">Sign In</Button>
                        <Button onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
