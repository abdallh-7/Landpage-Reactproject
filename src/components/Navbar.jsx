function Navbar({darkMode,setDarkMode}){
  return (
    <nav className="bg-slate-800 text-white dark:bg-gray-800  transition-colors duration-500 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">React Training</h1>
        <ul className="flex gap-6 text-sm">
          <li className="hover:text-green-400 cursor-pointer">Home</li>
          <li className="hover:text-green-400 cursor-pointer">About</li>
          <li className="hover:text-green-400 cursor-pointer">Contact</li>
           <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-green-400 text-white px-3 py-1 rounded hover:bg-green-500 transition"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
