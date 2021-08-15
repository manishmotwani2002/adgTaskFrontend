import React from 'react';
import AuthBase from './AuthBase';
const Signin = ({ stateChangerSignin, stateChangerSignup }) => {
	const Left = () => {
		return (
			<div>
				<label className="mt-8 text-sm">
					Don't Have an Account,
					<button
						onClick={() => {
							stateChangerSignin(false);
							stateChangerSignup(true);
						}}>
						<span className="text-primary">Signup</span>
					</button>{' '}
					Here
				</label>
			</div>
		);
	};

	const Right = () => {
		return (
			<div className="mx-auto w-10/12 ">
				<img src={require('../assets/loginpanel.svg').default} alt="" />
			</div>
		);
	};

	// setSignUp();

	return (
		<div>
			<AuthBase
				title="Log In To Your Account"
				authType="Login"
				rightHeading="Get The Best Choices"
				rightDescription="Follow your plan of buying the best product with the best market price"
				authState
				left={<Left />}
				right={<Right />}></AuthBase>
		</div>
	);
};

export default Signin;
