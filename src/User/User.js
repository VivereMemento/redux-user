import React, { Component } from 'react';
import { connect } from 'react-redux';

import thuckFetch from '../middleware/thunk-fetch';
class User extends Component {

	render() {
		const { user, loading, match } = this.props;

		return (
			loading
				? '...Loading' :
			user.message
				? <h1>Sorry, the user <span style={{color: 'red'}}>{match.params.login}</span> { user.message }</h1>
				: <div className="card" style={{width: "18rem", textAlign: 'left'}}>
						<img className="card-img-top" src={ user.avatar_url } alt="Card cap" />
						<div className="card-body">
							<h5>{ user.login }</h5>
							<h6>{ user.name }</h6>
							<p>{ user.company }</p>
							<p>{ user.location }</p>
							<h6>Statistics:</h6>
							<p>Repositories: { user.public_repos }</p>
							<p>Following: { user.following }</p>
							<p>Followers: { user.followers }</p>
						</div>
					</div>
					
						
		)
	}

	componentDidMount() {
		this.props.thuckFetch(`https://api.github.com/users/${this.props.match.params.login}`)
	}
}
 
export default connect(
	state => ({...state.user}),
	{ thuckFetch }
)(User);