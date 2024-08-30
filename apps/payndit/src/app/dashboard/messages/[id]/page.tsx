import GoogleIcon from "apps/payndit/src/components/google-icon"

const Message = () => {
    return (
        <div className="h-full grid grid-rows-[80px_1fr_60px]">
        <div className="flex flex-row gap-2 items-center justify-between shadow-sm">
          <div className="flex flex-row gap-4 items-center px-2">
            <div className="h-12 w-12 rounded-full border-2 border-primary grid place-items-center">
              <GoogleIcon icon="person" />
            </div>
            <span>John Doe</span>
          </div>
          <div className="border-l border-l-black/20 px-4 flex flex-row gap-4">
            <GoogleIcon icon="call" />
            <GoogleIcon icon="more_horiz" />
          </div>
        </div>
        <div className="py-4">Message</div>
        <div className="grid grid-cols-[1fr_40px]">
          <input
            type="text"
            placeholder="type your message"
            className="rounded-md border-2 border-black w-full px-2"
          />
          <button>
            <GoogleIcon icon="send" />
          </button>
        </div>
      </div>
    )
}

export default Message