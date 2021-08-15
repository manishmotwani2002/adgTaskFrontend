import { API } from '../backend';

//Api here depicts url to out database

export const signup = (user) => {
	return fetch(`${API}/signup`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	})
		.then((response) => {
			console.log(response);
			return response.json();
		})
		.catch((err) => console.log(err));
};
