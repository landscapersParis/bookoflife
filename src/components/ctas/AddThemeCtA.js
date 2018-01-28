import React from "react";
import { Card, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const AddThemeCtA = () => (
	<Card centered>
		<Card.Content textAlign="center">
		  <Card.Header>Add your Theme</Card.Header>
		  <Link to="/themes/new">
		  	<Icon name="plus circle" size="massive" />
		  </Link>
		</Card.Content>
	</Card>
);

export default AddThemeCtA;