import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";

const SignUp = () => {
  const handleSignUp = (event) => {
    // event.preventDefault();
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="w-1/2 mr-12">
          <img src={loginImg} alt="login image" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-4xl text-center top-2 font-bold">Sign Up</h1>
          <form onSubmit={handleSignUp()} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sing UP"
                className="btn btn-primary uppercase"
              />
            </div>
          </form>
          <p className="text-center mb-3">
            Have an account ?
            <Link to="/login" className="text-orange-400 font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
