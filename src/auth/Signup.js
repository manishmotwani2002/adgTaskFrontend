import React from 'react';
import AuthBase from './AuthBase';
const Signup = ({ stateChangerSignin, stateChangerSignup }) => {
	const Left = () => {
		return (
			<div>
				<label className="mt-8 text-sm">
					Aldready Have an Account,
					<button
						onClick={() => {
							stateChangerSignin(true);
							stateChangerSignup(false);
						}}>
						<span className="text-primary">Signin</span>
					</button>{' '}
					Here
				</label>
			</div>
		);
	};

	const Right = () => {
		return (
			<div className="">
				<img src={require('../assets/registerPanel.svg').default} alt="" />
			</div>
		);
	};
	return (
		<div>
			<AuthBase
				title="Register an Account"
				authType="Sign Up"
				rightHeading="We Love taking good Choices"
				rightDescription="Never Self Doubt about taking the right choice"
				leftBottom="Already have an account? "
				nextAuthType="Login"
				left={<Left />}
				right={<Right />}></AuthBase>
		</div>
	);
};

export default Signup;
