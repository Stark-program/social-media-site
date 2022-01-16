import socialmediaimage from "./cogwheel.svg";
import colorfulsvglogo from "./startprofile.svg";
function RenderLandingPage() {
  return (
    <div>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-800 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className=" relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white">
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
      <div className="flex flex-col lg:flex-row flex-wrap items-center place-items-center">
        <div className="text-[100px] lg:text-[200px] lg:basis-1/2">youU!</div>
        <div className="flex justify-center lg:basis-1/2">
          <img src={socialmediaimage} />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="flex justify-center lg:basis-1/2">
          <img src={colorfulsvglogo} />
        </div>
        <div className="flex justify-center lg:basis-1/2">
          <div>
            <h2>Title here</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos sapiente officiis modi at sunt excepturi
              expedita sint? Sed quibusdam recusandae alias error harum maxime
              adipisci amet laborum. Perspiciatis minima nesciunt dolorem!
              Officiis iure rerum voluptates a cumque velit quibusdam sed amet
              tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat,
              temporibus enim commodi iusto libero magni deleniti quod quam
              consequuntur! Commodi minima excepturi repudiandae velit hic
              maxime doloremque. Quaerat provident commodi consectetur veniam
              similique ad earum omnis ipsum saepe, voluptas, hic voluptates
              pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
              excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
              Voluptatem quaerat non architecto ab laudantium modi minima sunt
              esse temporibus sint culpa, recusandae aliquam numquam totam
              ratione voluptas quod exercitationem fuga. Possimus quis earum
              veniam quasi aliquam eligendi, placeat qui corporis!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RenderLandingPage;
