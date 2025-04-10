function CustomButton() {
    const handleClick = () => {
      console.log('Button clicked!');
    };
  
    return (
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out"
      >
        Click Me
      </button>
    );
  }
  
  export default CustomButton;