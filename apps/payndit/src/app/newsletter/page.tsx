export default  () => {
    return (
        <div className="bg-black/90 text-white">
        <div className="max-w-sm mx-auto items-start h-dvh grid pt-40 p-4 ">
          <div className="w-full">
            <div className="w-full">
              <h4 className="text-4xl font-bold mb-4">Subscribe to our Newsletter!</h4>
              <span className="font-bold">Be the first to know! </span>
              <span>Subscribe to our newsletter and get exclusive, early access to our latest product releases and updates. Stay ahead with instant notifications delivered directly to your inbox.</span>
            </div>
            <div className="mt-10">
              <form className="w-full">
                <div className="grid grid-flow-row w-full">
                  <label htmlFor="email" className="mb-4">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email address"
                    className="w-full p-4 mb-2 bg-black border border-white rounded-md"
                  />
                </div>
                <div className="mt-8">
                  <button className="w-full p-4 rounded-full bg-primary text-white/90">
                    Subscribe
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
    )
}