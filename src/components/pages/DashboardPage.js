import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import { allThemesSelector } from "../../reducers/themes";
import AddThemeCtA from "../ctas/AddThemeCtA";

const DashboardPage = ({ isConfirmed, themes }) => (
	<div>
	{!isConfirmed && <ConfirmEmailMessage />}

	{themes.length === 0 && <AddThemeCtA />}
	</div>
);

DashboardPage.propTypes = {
	isConfirmed: PropTypes.bool.isRequired,
	themes: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string.isRequired
	}).isRequired).isRequired
};

function mapStateToProps(state) {
	return {
		isConfirmed: !!state.user.confirmed,
		themes: allThemesSelector(state)
	};
}

export default connect(mapStateToProps)(DashboardPage);