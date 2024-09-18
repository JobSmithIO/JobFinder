import { useState } from 'react';
import { useNavigate } from 'react-router';
import { createUser } from '../../api/userApi';

const SignupForm = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      await createUser(email, password);
      setEmail('');
      setPassword('');
      navigate('/dashboard');
    } catch (err) {
      console.error('Error creating user:', err);
      if (err.response && err.response.data) {
        setError(err.response.data.message);
      } else {
        setError('An account with this email already exists.');
      }
    }
  };

  return (
    <div className='selection:bg-indigo-500 selection:text-white'>
      <div className='flex justify-center items-center'>
        <div className='p-8 flex-1'>
          <div className='mx-auto overflow-hidden'>
            <div className='p-8'>
              <h1 className='text-5xl font-bold text-indigo-600'>
                Create account
              </h1>
              <br></br>
              <br></br>
              <div className='flex flex-col items-center'>
                <button className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 hover:bg-indigo-300 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline'>
                  <div className='bg-white p-2 rounded-full'>
                    <svg className='w-4' viewBox='0 0 533.5 544.3'>
                      <path
                        d='M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z'
                        fill='#4285f4'
                      />
                      <path
                        d='M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z'
                        fill='#34a853'
                      />
                      <path
                        d='M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z'
                        fill='#fbbc04'
                      />
                      <path
                        d='M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z'
                        fill='#ea4335'
                      />
                    </svg>
                  </div>
                  <span className='ml-4'>Sign Up with Google</span>
                </button>
              </div>

              <div className='my-12 border-b text-center'>
                <div className='leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2'>
                  Or sign up with e-mail
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className='mt-12'
                action=''
                method='POST'
              >
                {/* <div className='relative'>
                  <input
                    id='name'
                    name='name'
                    type='text'
                    className='peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600'
                    placeholder='Name'
                  />
                  <label
                    htmlFor='name'
                    className='absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'
                  >
                    Name
                  </label>
                </div> */}
                <div className='mt-10 relative'>
                  <input
                    id='email'
                    name='email'
                    type='text'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    className='peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600'
                    placeholder='john@doe.com'
                  />
                  <label
                    htmlFor='email'
                    className='absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'
                  >
                    Email address
                  </label>
                </div>
                <div className='mt-10 relative'>
                  <input
                    id='password'
                    type='password'
                    name='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className='peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600'
                    placeholder='Password'
                  />
                  <label
                    htmlFor='password'
                    className='absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'
                  >
                    Password
                  </label>
                </div>
                {error && <div className='text-red-500 mb-4'>{error}</div>}
                <br></br>
                <button
                  type='submit'
                  className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                >
                  <svg
                    className='w-6 h-6 -ml-2'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' />
                    <circle cx='8.5' cy='7' r='4' />
                    <path d='M20 8v6M23 11h-6' />
                  </svg>
                  <span className='ml-3'>Sign Up</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
