import { IconProps } from './IconTypes';

const OpenIcon = ({ height, width = 48, color = '' }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            viewBox="0 0 24 24"
            color={color}
            {...(height ? { height } : {})}
        >
            <title>open-in-new</title>
            <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
        </svg>
    );
};

export default OpenIcon;
