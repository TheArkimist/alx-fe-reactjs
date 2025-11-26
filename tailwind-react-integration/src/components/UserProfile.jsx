function UserProfile() {
    return (
      <div className="user-profile bg-gray-100 p-8 hover:shadow-xl rounded-lg shadow-lg max-w-sm mx-auto my-20 sm:p-4 md:p-8 sm:max-w-xs md:max-w-sm">
        <img  className="rounded-full hover:scale-110 transition-transition duration-300 ease-in-out mx-auto w-36 h-36 sm:w-24 sm:h-24 md:w-36 md:h-36" src="https://via.placeholder.com/150" alt="User"/>
        <h1 className="text-xl hover:text-blue-500 text-blue-800 my-4 sm:text-lg md:text-xl">John Doe</h1>
        <p className="text-gray-600 text-base sm:text-sm md:text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;