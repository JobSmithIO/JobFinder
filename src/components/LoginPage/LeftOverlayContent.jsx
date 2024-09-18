const LeftOverlayContent = ({ isAnimated, setIsAnimated }) => {
  return (
    <div className='p-8 text-center'>
      <h1 className='text-5xl font-bold text-white mb-4'>
        Already have an account ?
      </h1>
      <br></br>
      <h5 className='text-xl text-white'>Let's get you signed in!</h5>
      <div className='mt-16'>
        <button
          className='py-3 px-6 bg-transparent rounded-full text-center text-white text-xl font-bold uppercase ring-2 ring-white active:scale-110 transition-transform ease-in hover:bg-white hover:text-black '
          onClick={(e) => {
            setIsAnimated(!isAnimated);
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default LeftOverlayContent;
