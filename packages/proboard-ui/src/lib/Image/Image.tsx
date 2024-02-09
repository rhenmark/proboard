type AvatarProps = {
    alt: string;
    src?: string
}

export const Avatar = ({ alt, src = "" }: AvatarProps) => {
    return (
        <div className="x-4 object-fill relative">
            <img src={src} alt={alt} className="shadow-lg h-10 w-10 rounded-md border-none object-fill" />
        </div>
    )
}