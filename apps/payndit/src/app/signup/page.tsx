import Link from "next/link";
import { socialMediaLogin } from "../../constants/social-media";

const Signup = () => {
  return (
    <div className="bg-black/90 text-white">
      <div className="max-w-sm mx-auto items-start h-dvh grid pt-40 p-4 ">
        <div className="w-full">
          <div className="w-full">
            <h4 className="text-4xl font-bold">Sign up with Payndit</h4>
          </div>
          <div className="mt-10">
            <form className="w-full">
              <div className="grid grid-flow-row w-full">
                <label htmlFor="email" className="text-md mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="name@domain.com"
                  className="w-full p-4 mb-2 bg-black border border-white rounded-md"
                />
              </div>
              <div className="mt-8">
                <button className="w-full p-4 rounded-full bg-primary text-white/90">
                  Next
                </button>
              </div>
            </form>
          </div>
          <div className="my-14">
            <hr />
          </div>
          <div>
          {socialMediaLogin.map((item: string) => (
              <div key={item} className="mb-4 ">
                <button className="p-2 w-full h-14 border border-white text-white font-bold rounded-full hover:bg-primary">
                  Signup with {item}
                </button>
              </div>
            ))}
          </div>
          <div className="my-14">
            <hr />
          </div>
          <div className="text-center">
            <span>Already have an account? </span>
            <Link href={"/login?from=signup"} className="underline">Log in here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
