import React from 'react';
import {Link} from 'react-router-dom'
import './signin.css'

const SignInPage = () => {
    return (
		<>
		
	<div className="signin">
		<div class="container h-100" >
		<div class="d-flex justify-content-center h-100">
			<div class="user_card">
			<Link to='/'>
				<div class="d-flex justify-content-center">
					
					<div class="brand_logo_container">
						<img src="../../image/logo-Bakery-01.png" class="brand_logo" alt="Logo"/>
					</div>
					
				</div>
				</Link>
				<div class="d-flex justify-content-center form_container" style={{background: '#beaaba'}}>
					<form className="form">
						<div class="input-group mb-3"style={{background: '#beaaba'}}>
							<div class="input-group-append"style={{background: '#beaaba'}}>
								<span class="input-group-text"><i class="fa fa-user" id="icon"></i></span>
							</div>
							<input type="text" name="" class="form-control input_user"  placeholder="username"/>
						</div>
						<div class="input-group mb-2"style={{background: '#beaaba'}}>
							<div class="input-group-append"style={{background: '#beaaba'}}>
								<span class="input-group-text"><i class="fa fa-key" id="icon"></i></span>
							</div>
							<input type="password" name="" class="form-control input_pass" placeholder="password"></input>
						</div>
						<div class="form-group">
							<div class="custom-control custom-checkbox" style={{background: '#beaaba'}} >
								<input type="checkbox" class="custom-control-input" id="customControlInline"/>
								<label class="custom-control-label p-l" for="customControlInline" style={{float: 'left', background: '#beaaba'}}>Remember me</label>
							</div>
						</div>
							<div class="d-flex justify-content-center mt-3 login_container" style={{background: '#beaaba'}}>
				 	<button type="button" name="button" class="btn login_btn" >Login</button>
                    </div>
                    <div class="d-flex justify-content-center mt-3 login_container" style={{background: '#beaaba'}}>
                    
                    <button type="button" name="buton" class="btn fb_btn"><i class="fa fa-facebook-f" style={{padding: '0 10px 0 0'}} id="icon"></i>Đăng nhập bằng Facebook</button>
				   </div>
					</form>
				</div>
		
				<div class="mt-4">
					<div class="d-flex justify-content-center links" style={{background: '#beaaba'}}>
						Don't have an account? <Link to="/signup"><a href="/" class="ml-2" id="textlink">Sign Up</a></Link>
					</div>
					<div class="d-flex justify-content-center links"style={{background: '#beaaba'}}>
						<a href="/" id="textlink">Forgot your password?</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
	</>
    )
}
export default SignInPage