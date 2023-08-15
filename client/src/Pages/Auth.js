import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginForm({ handleInputChange, handleSubmit, errorMessage, formData }) {
  return (
    <div className="container mx-auto">
			<div className="flex justify-center px-6 my-12">
			
				<div className="w-full xl:w-3/4 lg:w-11/12 flex">
					
					<div
						className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
						style={{ backgroundImage: "url('https://c1.wallpaperflare.com/preview/847/27/732/library-sky-birds-mystical.jpg')" }}
					></div>
					
					<div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 className="pt-4 text-2xl pl-8">Log In Below!</h3>
						<form
             className=" px-8 pt-6 pb-8 mb-4 bg-white rounded w-full max-w-sm"
             onSubmit={handleSubmit}>{errorMessage && <p>{errorMessage}</p>}
             
					    <div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="username">
									Email
								</label>
								<input
									className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									onChange={handleInputChange}
                  name="email"
                  type="email"
                  value={formData.email}
                  placeholder="Enter your email"
								/>
							</div>

							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="password">
									Password
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  onChange={handleInputChange}
                  name="password"
                  type="password"
                  value={formData.password}
                  placeholder="Enter your password"
								/>
								<p className="text-xs italic text-red-500">Please choose a password.</p>
							</div>

							<div className="mb-6 text-center">
								<button
									className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									
								>
									Sign In
								</button>
							</div>
							<hr className="mb-6 border-t" />
							
							
						</form>
					</div>
				</div>
			</div>
		</div>
  );
}

function RegisterForm({ handleInputChange, handleSubmit, errorMessage, formData }) {
  return (
    	
		<div className="container mx-auto">
			<div className="flex justify-center px-6 my-12">
			
				<div className="w-full xl:w-3/4 lg:w-11/12 flex">
					
					<div
						className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
						style={{ backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/569/784/53/macro-table-books-blur-wallpaper-preview.jpg')" }}
					></div>
					
					<div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 className="pt-4 text-2xl pl-8">Register Today!</h3>
						<form
             className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
             onSubmit={handleSubmit}>{errorMessage && <p>{errorMessage}</p>}
             
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="username">
									Username
								</label>
								<input
									className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									onChange={handleInputChange}
                  name="username"
                  type="text"
                  value={formData.username}
                  placeholder="Enter your Username"
								/>
							</div>

              <div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="username">
									Email
								</label>
								<input
									className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									onChange={handleInputChange}
                  name="email"
                  type="email"
                  value={formData.email}
                  placeholder="Enter your email"
								/>
							</div>

							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="password">
									Password
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  onChange={handleInputChange}
                  name="password"
                  type="password"
                  value={formData.password}
                  placeholder="Enter your password"
								/>
								<p className="text-xs italic text-red-500">Please choose a password.</p>
							</div>

							<div className="mb-4">
								<input className="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
								<label className="text-sm" for="checkbox_id">
									Remember Me
								</label>
							</div>
							<div className="mb-6 text-center">
								<button
									className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									>
									Register
								</button>
							</div>
							<hr className="mb-6 border-t" />
							
							
						</form>
					</div>
				</div>
			</div>
		</div>
	
  );
}

function AuthForm(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    isLogin: true
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = e => {
    const prop = e.target.name;
    const value = e.target.value;

    if (prop === 'isLogin') {
      setFormData({
        ...formData,
        isLogin: value === 'login' ? true : false
      });
    } else {
      setFormData({
        ...formData,
        [prop]: value
      });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const url = formData.isLogin ? '/api/login' : '/api/register';
    try {
      const res = await axios.post(url, formData);


      props.setState(oldState => {
        return {
          ...oldState,
          user: res?.data?.user
        };
      });
      setErrorMessage('');
      setFormData({
        username: '',
        email: '',
        password: '',
        isLogin: true
      });

      navigate('/dashboard');
    } catch (err) {
      setErrorMessage(err.response?.data.message);
    }
  };

  return (
    <>
    {/* <h1>{formData.isLogin ? 'Log In' : 'Register'}</h1> */}
    {formData.isLogin ? (
      <LoginForm
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        errorMessage={errorMessage}
        formData={formData}
      />
    ) : (
      <RegisterForm
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        errorMessage={errorMessage}
        formData={formData}
      />
    )}
    
    <div className='flex items-center justify-center space-x-4 mb-10'>
  <label
    className={`flex flex-col items-center cursor-pointer text-xl ${
      formData.isLogin ? 'text-blue-500' : 'text-black-600'
    }`}
    htmlFor="login"
  >
    <input
      name="isLogin"
      onChange={handleInputChange}
      type="radio"
      id="login"
      value="login"
      checked={formData.isLogin}
      className="hidden"
    />
    <div
      className={`w-8 h-8 rounded-full border flex items-center justify-center ${
        formData.isLogin ? 'bg-blue-500 border-blue-700' : 'bg-white border-gray-700'
      }`}
    >
      {formData.isLogin && <span className="text-white">&#10003;</span>}
    </div>
    Login
  </label>
  <label
    className={`flex flex-col items-center cursor-pointer text-xl ${
      !formData.isLogin ? 'text-blue-500' : 'text-gray-600'
    }`}
    htmlFor="register"
  >
    <input
      name="isLogin"
      onChange={handleInputChange}
      type="radio"
      id="register"
      value="register"
      checked={!formData.isLogin}
      className="hidden"
    />
    <div
      className={`w-8 h-8 rounded-full border flex items-center justify-center ${
        !formData.isLogin ? 'bg-blue-500 border-blue-700' : 'bg-white border-gray-700'
      }`}
    >
      {!formData.isLogin && <span className="text-white">&#10003;</span>}
    </div>
    Register
  </label>
</div>



  </>
  
  );
}

export default AuthForm;


 

