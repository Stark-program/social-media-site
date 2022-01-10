function RenderLandingPage() {
  return (
    <div>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-800 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className=" relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white"
              href="#pablo"
            >
              A social media site that makes you, more you!
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className="lg:flex flex-grow flex-nowrap items-center"
            id="example-navbar-danger"
          >
            <ul className="flex flex-row justify-end lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 justify-end"
                  href="/login"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75">
                    Login
                  </i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 justify-end"
                  href="/signup"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75">
                    Signup
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="lg:columns-2">
        <div className="text-[100px] lg:text-[200px]">youU!</div>
        <div>
          <h2>Image here</h2>
          <h2>title</h2>
        </div>
      </div>
      <div className="lg:columns-2">
        <div>Image here</div>
        <div>
          <h2>Title here</h2>
        </div>
      </div>
    </div>
  );
}

export default RenderLandingPage;
