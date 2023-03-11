type AvatarProps = {
    alt: string;
    src?: string
}

const defaultImage = "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-3-800x800.jpg"
export const Avatar = ({ alt, src = defaultImage }: AvatarProps) => {
    return (
        <div className="x-4 object-fill relative">
            <img src={src} alt={alt} className="shadow-lg h-10 w-10 rounded-md border-none object-fill" />
        </div>
    )
}