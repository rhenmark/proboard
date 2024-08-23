
const ResetPassword = () => {
  return (
    <div className="bg-black/90 text-white">
      <div className="max-w-sm mx-auto items-start h-dvh grid pt-40 p-4 ">
        <div className="w-full">
          <div className="w-full">
            <h4 className="text-4xl font-bold mb-4">Reset your password</h4>
            <span>Enter the email address or username linked to your Payndit account and we'll send you an email.</span>
          </div>
          <div className="mt-10">
            <form className="w-full">
              <div className="grid grid-flow-row w-full">
                <label htmlFor="email" className="mb-4">
                  Email or username
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email or username"
                  className="w-full p-4 mb-2 bg-black border border-white rounded-md"
                />
              </div>
              <div className="mt-8">
                <button className="w-full p-4 rounded-full bg-primary text-white/90">
                  Send link
                </button>
              </div>
            </form>
          </div>
          <div className="my-14">
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
