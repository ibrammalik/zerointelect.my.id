import { SVGAttributes } from 'react';

export default function ApplicationLogo(props: SVGAttributes<SVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="500"
            zoomAndPan="magnify"
            viewBox="0 0 375 374.999991"
            height="500"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
        >
            <defs>
                <clipPath id="7f0fe06146">
                    <path
                        d="M 299.195312 214.121094 L 375 214.121094 L 375 280.453125 L 299.195312 280.453125 Z M 299.195312 214.121094 "
                        clipRule="nonzero"
                    />
                </clipPath>
                <clipPath id="ff5ba9967f">
                    <path
                        d="M 337.097656 214.121094 L 375 280.453125 L 299.195312 280.453125 Z M 337.097656 214.121094 "
                        clipRule="nonzero"
                    />
                </clipPath>
            </defs>
            <path
                fill="#38b6ff"
                d="M 31 0 L 360.832031 0 L 224.25 229.75 L 286.332031 229.75 L 258 280.417969 L 151.582031 280.417969 L 287.25 52.332031 L 0 52.332031 Z M 31 0 "
                fillOpacity="1"
                fillRule="nonzero"
            />
            <path
                fill="#38b6ff"
                d="M 344 375 L 14.167969 375 L 150.75 145.25 L 88.667969 145.25 L 117 94.582031 L 223.417969 94.582031 L 87.75 322.667969 L 375 322.667969 Z M 344 375 "
                fillOpacity="1"
                fillRule="nonzero"
            />
            <g clipPath="url(#7f0fe06146)">
                <g clipPath="url(#ff5ba9967f)">
                    <path
                        fill="#38b6ff"
                        d="M 299.195312 214.121094 L 375.109375 214.121094 L 375.109375 280.453125 L 299.195312 280.453125 Z M 299.195312 214.121094 "
                        fillOpacity="1"
                        fillRule="nonzero"
                    />
                </g>
            </g>
        </svg>
    );
}
