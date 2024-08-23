import Link from "next/link"

const FloatingHome = () => {
    return (
        <div className="z-50 text-white fixed right-20 bottom-20">
            <Link href="/" className="grid place-items-center h-20 w-20 rounded-full border p-2 hover:bg-white/50">
                <span className="material-symbols-outlined text-4xl">home</span>
                {/* Home */}
            </Link>
            </div>
    )
}

export default FloatingHome