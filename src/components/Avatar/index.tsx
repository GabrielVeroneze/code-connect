import Image from 'next/image'
import styles from './Avatar.module.css'

interface AvatarProps {
    imageSrc: string
    name: string
}

export const Avatar = ({ imageSrc, name }: AvatarProps) => {
    return (
        <div>
            <Image
                src={imageSrc}
                alt={`Avatar de ${name}`}
                width={32}
                height={32}
            />
            <span>@{name}</span>
        </div>
    )
}
