import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import SignupPage from "./components/pages/SignupPage";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";
import ResetPasswordPage from "./components/pages/ResetPasswordPage";
import NewThemePage from "./components/pages/NewThemePage";
import ConfirmationPage from "./components/pages/ConfirmationPage";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";
import TopNav from "./components/nav/TopNav";

const App = ({ location, isAuthenticated }) => (
	<div className="ui container">
		{isAuthenticated && <TopNav />}
		<Route location={location} path="/" exact component={HomePage} />
		<Route
		 location={location} 
		 path="/confirmation/:token"
		 exact
		 component={ConfirmationPage}
		/>
		<GuestRoute location={location} path="/login" exact component={LoginPage} />
		<GuestRoute
		 location={location} 
		 path="/signup"
		 exact
		 component={SignupPage}
		/>
		<GuestRoute
		 location={location} 
		 path="/forgot_password"
		 exact
		 component={ForgotPasswordPage}
		/>
		<GuestRoute
		 location={location} 
		 path="/reset_password/:token"
		 exact
		 component={ResetPasswordPage}
		/>
		<UserRoute
			location={location}
			path="/dashboard"
			exact
			component={DashboardPage}
		/>
		<UserRoute
			location={location}
			path="/themes/new"
			exact
			component={NewThemePage}
		/>
	</div>
);

App.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired
	}).isRequired,
	isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
	return {
		isAuthenticated: !!state.user.email
	}
}

export default connect(mapStateToProps)(App);
