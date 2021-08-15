import { API } from '../backend';

//Api here depicts url to out database

export const signin = (user) => {
	console.log('user is', user);
	return fetch(`${API}/signin`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-type': 'application/json',
		},
		body: JSON.stringify(user),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const authenticate = (data, next) => {
	if (typeof window !== 'undefined') {
		localStorage.setItem('jwt', JSON.stringify(data));
		next();
	}
};

export const signout = () => {
	if (typeof window !== 'undefined') {
		localStorage.removeItem('token');
		localStorage.removeItem('email');
		window.location.reload();
		// next();
	}
	// 	return fetch(`${API}/signout`, {
	// 		method: 'GET',
	// 	})
	// 		.then((response) => console.log('signout sucess'))
	// 		.catch((err) => console.log(err));
	// }
};

export const isAuthenticated = () => {
	if (typeof window == 'undefined') {
		return false;
	}
	if (localStorage.getItem('token')) {
		return JSON.parse(localStorage.getItem('token'));
	} else {
		return false;
	}
};

// export const getUserByEmail = (email) => {
// 	return fetch(`${API}/findUser`, {
// 		method: 'POST',
// 		headers: {
// 			Accept: 'application/json',
// 			'Content-type': 'application/json',
// 		},
// 		body: JSON.stringify(email),
// 	})
// 		.then((response) => {
// 			return response.json();
// 		})
// 		.catch((err) => console.log(err));
// }
