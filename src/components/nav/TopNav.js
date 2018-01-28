import React from "react";
import PropTypes from "prop-types";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import gravatarUrl from "gravatar-url";
import * as actions from "../../actions/auth";
import { allThemesSelector } from "../../reducers/themes";

const TopNav = ({ user, logout }) => (
	<Menu secondary pointing>
		<Menu.Item as={Link} to="/dashboard">Dashboard</Menu.Item>
		
		<Menu.Menu position="right">
			<Dropdown trigger={<Image avatar src={gravatarUrl(user.email)} />}>
			  <Dropdown.Menu>
				<Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
			  </Dropdown.Menu>
			</Dropdown>
		</Menu.Menu>
	</Menu>
);

TopNav.propTypes = {
	user: PropTypes.shape({
	email: PropTypes.string.isRequired
	}).isRequired,
	hashThemes: PropTypes.bool.isRequired,
	logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	return {
		user: state.user,
		hashThemes: allThemesSelector(state).length > 0
	};
}


export default connect(mapStateToProps, { logout: actions.logout })(
	TopNav
);