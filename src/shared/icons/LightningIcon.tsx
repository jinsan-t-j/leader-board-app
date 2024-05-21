import type { FC } from 'react'

/**
 * The lightning icon component.
 *
 * @returns The JSX.
 */
export const LightningIcon: FC = () => {
    return (
        <svg
            width='28'
            height='45'
            viewBox='0 0 28 45'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <g filter='url(#filter0_d_230_1225)'>
                <path
                    d='M1.04477 24.6035L4.88305 2.18596C4.90145 2.07854 4.99457 2 5.10356 2H22.494C22.6608 2 22.7689 2.17603 22.6935 2.32485L15.0299 17.446C14.9545 17.5948 15.0626 17.7708 15.2294 17.7708H23.539C23.7258 17.7708 23.8303 17.9862 23.7147 18.133L5.55719 41.1846C5.40816 41.3738 5.10642 41.2262 5.16429 40.9924L9.08735 25.1424C9.12227 25.0013 9.01552 24.8649 8.87019 24.8649H1.26527C1.12663 24.8649 1.02137 24.7401 1.04477 24.6035Z'
                    fill='black'
                />
                <mask
                    id='mask0_230_1225'
                    // style='mask-type:alpha'
                    maskUnits='userSpaceOnUse'
                    x='0'
                    y='1'
                    width='25'
                    height='41'
                >
                    <path
                        d='M0.756414 24.6749L4.70681 1.68585C4.72526 1.57847 4.81836 1.5 4.92731 1.5H22.8323C22.9993 1.5 23.1074 1.67633 23.0317 1.82517L15.1402 17.3399C15.0644 17.4887 15.1726 17.6651 15.3396 17.6651H23.9097C24.0967 17.6651 24.2012 17.8809 24.0852 18.0276L5.38111 41.6874C5.2318 41.8763 4.93041 41.7284 4.98846 41.4947L9.03266 25.2142C9.06771 25.0731 8.96094 24.9366 8.81552 24.9366H0.97692C0.838208 24.9366 0.732922 24.8116 0.756414 24.6749Z'
                        fill='#FFCC00'
                    />
                </mask>
                <g mask='url(#mask0_230_1225)'>
                    <rect
                        width='27.0723'
                        height='40.161'
                        transform='translate(-0.966583 1.61188)'
                        fill='#FFCC00'
                    />
                </g>
                <path
                    d='M0.756414 24.6749L4.70681 1.68585C4.72526 1.57847 4.81836 1.5 4.92731 1.5H22.8323C22.9993 1.5 23.1074 1.67633 23.0317 1.82517L15.1402 17.3399C15.0644 17.4887 15.1726 17.6651 15.3396 17.6651H23.9097C24.0967 17.6651 24.2012 17.8809 24.0852 18.0276L5.38111 41.6874C5.2318 41.8763 4.93041 41.7284 4.98846 41.4947L9.03266 25.2142C9.06771 25.0731 8.96094 24.9366 8.81552 24.9366H0.97692C0.838208 24.9366 0.732922 24.8116 0.756414 24.6749Z'
                    stroke='black'
                    strokeWidth='0.111869'
                />
            </g>
            <defs>
                <filter
                    id='filter0_d_230_1225'
                    x='0.118422'
                    y='0.063122'
                    width='27.0453'
                    height='44.516'
                    filterUnits='userSpaceOnUse'
                    colorInterpolationFilters='sRGB'
                >
                    <feFlood floodOpacity='0' result='BackgroundImageFix' />
                    <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                    />
                    <feOffset dx='1.18805' dy='0.475221' />
                    <feGaussianBlur stdDeviation='0.801936' />
                    <feComposite in2='hardAlpha' operator='out' />
                    <feColorMatrix
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28 0'
                    />
                    <feBlend
                        mode='normal'
                        in2='BackgroundImageFix'
                        result='effect1_dropShadow_230_1225'
                    />
                    <feBlend
                        mode='normal'
                        in='SourceGraphic'
                        in2='effect1_dropShadow_230_1225'
                        result='shape'
                    />
                </filter>
            </defs>
        </svg>
    )
}
