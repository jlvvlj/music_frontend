import { transform } from 'lodash';
import Link from 'next/link'
import './nav.css'
{/* <link rel="stylesheet" href="nav.css">
<link rel="stylesheet" href="fate.css">
<script src="https://assets.website-files.com/63b814185c1004bc503cafb6/js/webflow.8e0c6a505.js"
    type="text/javascript"></script> */}

import React from 'react'

const navStyle = {
    opacity: 1,
    display: 'flex'
}

const navparentStyle = {
    height: 'var(--changingHeight)',
    borderRadius: '10px'
}

export default function nav() {
    function getScrollTop() {
        return document.body.scrollTop;
    }

    window.addEventListener('scroll', function () {
        console.log(getScrollTop())
        document.body.style.setProperty('--scrollPosition', (document.body.scrollTop / 60) + '%');
        // document.body.style.setProperty('--border-radius', (10+document.body.scrollTop/200) + 'px');
        // document.body.style.setProperty('--changingHeight', (50-(document.body.scrollTop/300)) + 'px');
        // document.body.style.setProperty('--navbarOpacity', (0.2)+ 'px';
    });

    return (
        <>
    <div className="background">
        <nav className="nav" style={navStyle}>
            <div className="container-lg nav-parent" style={navparentStyle}>
                <div id="#documentElement" className="nav-col middle">
                    <div id="progress" className="progress"
                        style={{ willChange: 'width, height, background-color: (0, 0%, 100%), width: var(--scrollPosition), height: 100%' }}>
                    </div>
                    <div className="frost ab-bl"
                        style={{ transform: 'translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d' }}>
                    </div>
                    <div className="logo-pop-out">
                    </div>
                    <a aria-label="Home" data-w-id="a34d7e2a-6311-e67e-5390-cdddda6d14a4" href="/" aria-current="page"
                        className="logo w-inline-block w--current"
                        style={{ transform: 'translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                        <svg width="30" height="20" viewBox="0 0 58 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M35.6929 17.7623C35.6929 15.3056 37.6889 13.3186 40.1568 13.3186C42.6248 13.3186 44.6208 15.3056 44.6208 17.7623V34.6676C44.6017 37.5941 46.974 39.981 49.9138 40.0001C49.933 40.0001 49.9521 40.0001 49.9712 40.0001H52.6496C55.5959 40.0064 57.9937 37.6322 58.0001 34.6993C58.0001 34.6866 58.0001 34.6803 58.0001 34.6676V18.6511C58.0128 15.7245 55.6405 13.3376 52.7007 13.3249C52.6815 13.3249 52.6688 13.3249 52.6496 13.3249H49.9712C47.0314 13.3376 44.6336 10.9761 44.6208 8.04957C44.6208 8.03052 44.6208 8.01148 44.6208 7.99243V5.32619C44.6272 2.39332 42.2422 0.00639902 39.2959 5.08201e-05C39.2832 5.08201e-05 39.2768 5.08201e-05 39.264 5.08201e-05H36.5856C33.6394 -0.0126456 31.248 2.35523 31.2352 5.2881C31.2352 5.3008 31.2352 5.31349 31.2352 5.32619V8.88118C31.2352 11.3379 29.2392 13.3249 26.7712 13.3249C24.3033 13.3249 22.3073 11.3379 22.3073 8.88118V5.32619C22.3136 2.39332 19.9286 0.00639902 16.9823 5.08201e-05C16.9696 5.08201e-05 16.9632 5.08201e-05 16.9505 5.08201e-05H5.35684C2.41061 -0.0126456 0.0128052 2.36158 5.0916e-05 5.29445C5.0916e-05 5.30715 5.0916e-05 5.31349 5.0916e-05 5.32619V34.6358C-0.0127033 37.5687 2.37234 39.9556 5.31858 39.9683C5.33133 39.9683 5.34409 39.9683 5.35684 39.9683H8.02886C10.9751 39.981 13.3729 37.6068 13.3856 34.6739C13.3856 34.6612 13.3856 34.6485 13.3856 34.6358V17.7623C13.3474 15.3056 15.3179 13.2932 17.7859 13.2551C19.0103 13.236 20.1837 13.7185 21.0382 14.5882C21.8864 15.4262 22.3519 16.5752 22.3136 17.7623V34.6358C22.3009 37.5687 24.6859 39.9556 27.6322 39.9683C27.6449 39.9683 27.6513 39.9683 27.664 39.9683H30.3424C33.2887 39.981 35.6865 37.6068 35.6992 34.6739C35.6992 34.6612 35.6992 34.6485 35.6992 34.6358V17.7623H35.6929Z"
                                stroke="none" />
                        </svg> --{'>'}
                        <svg width="1386" height="1386" viewBox="0 0 1386 1386" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="1386" height="1386" fill="white" />
                            <circle cx="701" cy="695" r="428" fill="white" />
                            <path d="M975.892 372.14C1071.29 452.816 1121.51 557.748 1126.53 686.935C1126.65 689.591 1125.46 691.41 1122.98 692.392C1049.98 721.094 985.276 713.124 928.854 668.484C830.621 590.694 770.764 644.055 684.745 707.898C674.003 715.868 659.393 719.564 640.913 718.986C639.583 718.961 638.292 718.534 637.209 717.761C636.127 716.988 635.304 715.905 634.849 714.655C625.06 687.801 618.65 656.876 602.278 635.739C550.563 569.211 496.162 606.374 442.542 647.347C393.945 684.509 345.781 725.396 278.993 708.331C275.99 707.58 274.518 705.646 274.576 702.527C277.348 338.876 692.628 132.448 975.892 372.14Z" fill="black" />
                            <path d="M936.824 764.031C984.814 790.019 1060.87 787.68 1115.36 773.56C1115.94 773.418 1116.55 773.423 1117.13 773.574C1117.71 773.725 1118.25 774.018 1118.68 774.425C1119.11 774.832 1119.43 775.34 1119.61 775.9C1119.79 776.461 1119.81 777.057 1119.69 777.631C1060.44 1075.19 720.261 1226.61 462.638 1052.15C373.299 991.624 313.903 905.403 284.451 793.484C284.357 793.107 284.352 792.714 284.435 792.335C284.519 791.957 284.689 791.602 284.932 791.3C285.175 790.998 285.485 790.756 285.838 790.594C286.19 790.432 286.575 790.354 286.963 790.365C386.928 793.83 451.464 737.004 524.056 679.225C525.922 677.736 528.121 676.72 530.464 676.264C532.808 675.808 535.227 675.926 537.516 676.606C539.805 677.287 541.895 678.511 543.608 680.173C545.322 681.836 546.608 683.888 547.358 686.155C568.667 749.738 580.102 801.02 663.262 794.87C706.921 791.664 756.557 748.179 793.286 721.238C855.05 676.107 892.905 740.209 936.824 764.031Z" fill="black" />
                        </svg>
                        <svg height="196" viewBox="0 0 847 196" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M117 85.0227C67.8 119.423 18.5 115.023 0 108.523C0 113.023 3.5 165.523 10 191.523C87 189.023 95 179.189 120.5 168.523C145 157.523 225.6 102.223 240 87.0227C254.4 71.8227 265.667 78.0227 269.5 83.0227C274.833 101.023 272 121 304.5 167.023C338 211.5 398.5 190.828 403.5 189.5C445 178.477 457 169.023 481.5 149.523C521.5 113.923 547.167 106.023 555 106.523C608.5 108.523 618 143.418 666 168.023C725.5 198.523 821.5 179.023 841 174.023C846 154.023 846.5 107.523 846.5 94.0227C812.1 110.423 769.833 111.189 753 109.523C739.5 110.523 701.7 104.723 658.5 73.5227C604.5 34.5227 589 33.0227 553.5 31.0227C525.1 29.4227 473.333 61.356 451 77.5227C437 88.856 406.5 112.323 396.5 115.523C353 127.023 360 118.023 351 91.5227C334 31.0227 301 -0.977257 260 0.0227429C219 1.02274 178.5 42.0227 117 85.0227Z"
                                fill="white" />
                        </svg>
                        <div id="muteButton" data-w-id="a34d7e2a-6311-e67e-5390-cdddda6d14a6" className="sound"
                            style={{ transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1)', transformStyle: 'preserve-3d' }}>
                            <div className="sound-icon" data-w-id="a34d7e2a-6311-e67e-5390-cdddda6d14a7"
                                data-animation-type="lottie"
                                data-src="https://assets.website-files.com/63b814185c1004bc503cafb6/63b814185c100486943cafe1_sound.json"
                                data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0"
                                data-renderer="svg" data-default-duration="1.6666666666666667" data-duration="1"
                                style={{ opacity: 1 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 12" width="14" height="12"
                                    preserveAspectRatio="xMidYMid meet"
                                    style={{ width: '100 %', height: '100 %', transform: 'translate3d(0, px, 0, px, 0, px)' }}>
                                    <defs>
                                        <clipPath id="__lottie_element_54">
                                            <rect width="14" height="12" x="0" y="0"></rect>
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#__lottie_element_54)">
                                        <g transform="matrix(1,0,0,1,8.375,5.75)" opacity="1" style={{ display: 'block' }}>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0"
                                                    stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1"
                                                    stroke-width="2"
                                                    d=" M-6.375,-3.2269999980926514 C-6.375,-0.08699999749660492 -6.375,6.125 -6.375,6.125">
                                                </path>
                                            </g>
                                        </g>
                                        <g transform="matrix(1,0,0,1,11.5,5.75)" opacity="1" style={{ display: 'block' }}>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0"
                                                    stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1"
                                                    stroke-width="2" d=" M-6.375,-5 C-6.375,-5 -6.375,6.125 -6.375,6.125">
                                                </path>
                                            </g>
                                        </g>
                                        <g transform="matrix(1,0,0,1,14.468999862670898,5.75)" opacity="1"
                                            style={{ display: 'block' }}>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0"
                                                    stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1"
                                                    stroke-width="2"
                                                    d=" M-6.375,-3.2200000286102295 C-6.375,-0.07800000160932541 -6.375,6.125 -6.375,6.125">
                                                </path>
                                            </g>
                                        </g>
                                        <g transform="matrix(1,0,0,1,17.312000274658203,5.75)" opacity="1"
                                            style={{ display: 'block' }}>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0"
                                                    stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1"
                                                    stroke-width="2"
                                                    d=" M-6.375,-3.2200000286102295 C-6.375,-0.07800000160932541 -6.375,6.125 -6.375,6.125">
                                                </path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="nav-col">
                    <div className="border-line-top intro" style={{ width: '100%', height: '1px' }}></div>
                    <div className="border-line-right intro" style={{ width: '1px', height: '100 %' }}></div>
                    <div className="border-line-btm-right intro" style={{ width: '100 %', height: '1px' }}>
                    </div>
                    <a href="/about" className="nav-button bg w-inline-block" style={{ opacity: 1 }}>
                        <div className="div-hide intro">
                            <div className="button-txt"
                                style={{ transform: 'translate3d(0, px, 0%) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                                ABOUT</div>
                            <div
                                className="button-txt-ap"
                                style={{ transform: 'translate3d(0px, 0px, -100%) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                                ABOUT
                            </div>
                        </div>
                        <div className="border-line-left hide"></div>
                        <div className="border-line-right" style={{ width: '1px', height: '100 %' }}></div>
                        <div className="xsm-text fade">001</div>
                        <div className="bg-whipe" style={{ width: '100 %', height: '0 %' }}>
                        </div>
                    </a>
                    <div className="size-two">
                        <a href="https://www.fates.world/divisions" target="_blank" className="nav-button w-inline-block"
                            style={{ opacity: 1 }}>
                            <div className="div-hide intro hide">
                                <div className="button-txt">
                                    <div
                                        style={{
                                            transform:
                                                "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                            transformStyle: "preserve-3d",
                                        }}
                                    >
                                        DIVISIONS
                                    </div>
                                    <div className="button-txt-ap" />
                                    <div style={{ transform: 'translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                                        <div className="button-txt">DIVISIONS</div>
                                    </div>

                                    DIVISIONS</div>
                            </div >
                            <div className="border-line-right" style={{ width: '1px', height: '100%' }}></div>
                            <svg width="32" height="32" viewBox="0 0 54 54" fill="white"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M38.1146 17.0114C36.0198 16.0599 33.8032 15.3835 31.5236 15C31.2399 15.4997 30.9046 16.1744 30.6724 16.6991C28.248 16.3493 25.7836 16.3493 23.3592 16.6991C23.1024 16.1183 22.8139 15.5512 22.495 15C20.2118 15.3853 17.9912 16.0616 15.8912 17.0114C12.1553 22.2634 10.4726 28.6325 11.1448 34.9771C13.586 36.759 16.3262 38.1199 19.2448 39C19.9036 38.1239 20.486 37.1961 20.986 36.2264C20.0386 35.8882 19.1236 35.4702 18.2516 34.9771C18.4838 34.8147 18.703 34.6398 18.9223 34.4648C21.4471 35.6428 24.2134 36.2545 27.0158 36.2545C29.8182 36.2545 32.5846 35.6428 35.1093 34.4648C35.3286 34.6398 35.5479 34.8147 35.78 34.9771C34.9107 35.4751 33.9952 35.8933 33.0456 36.2264C33.5363 37.1984 34.1147 38.1266 34.774 39C37.6947 38.125 40.4358 36.7637 42.874 34.9771C43.5515 28.6303 41.8634 22.258 38.1146 17.0114V17.0114ZM21.6953 31.3664C20.8832 31.3056 20.1279 30.9397 19.5905 30.3468C19.0531 29.7539 18.7763 28.981 18.8191 28.1931C18.891 27.6571 19.121 27.1524 19.4815 26.7398C19.842 26.3271 20.3176 26.0238 20.8515 25.8663C21.3854 25.7089 21.9548 25.7038 22.4916 25.8518C23.0283 25.9998 23.5096 26.2946 23.8778 26.7008C24.246 27.1071 24.4854 27.6075 24.5675 28.1422C24.6495 28.6769 24.5707 29.2232 24.3404 29.7155C24.11 30.2079 23.738 30.6256 23.2689 30.9184C22.7997 31.2112 22.2534 31.3667 21.6953 31.3664V31.3664ZM32.3233 31.3664C31.5252 31.2692 30.7912 30.8932 30.2591 30.3089C29.727 29.7246 29.4334 28.9723 29.4334 28.1931C29.4334 27.414 29.727 26.6616 30.2591 26.0773C30.7912 25.493 31.5252 25.117 32.3233 25.0198C32.7285 25.0419 33.125 25.142 33.4898 25.3141C33.8546 25.4863 34.1804 25.7271 34.4481 26.0225C34.7159 26.3179 34.9202 26.6619 35.0492 27.0346C35.1782 27.4073 35.2294 27.8011 35.1996 28.1931C35.2492 28.9826 34.9747 29.759 34.436 30.3534C33.8973 30.9478 33.1379 31.3119 32.3233 31.3664V31.3664Z" />
                            </svg>
                            <div className="xsm-text fade">002</div>
                            <div className="bg-whipe" style={{ width: '100%', height: '0%' }}></div>
                        </a >
                        <a href="https://twitter.com/fates_world" rel="noopener" target="_blank"
                            className="nav-button w-inline-block" style={{ opacity: 1 }}>
                            <div className="div-hide intro hide">
                                <div className="button-txt">
                                    <div style={{ transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }}>
                                        EVACUATE
                                    </div>
                                    <div className="button-txt-ap"></div>
                                    <div style={{ transform: 'translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>

                                        EVACUATE</div>
                                </div >
                                <div className="xsm-text fade">003</div>
                                <div className="bg-whipe" style={{ width: '100%', height: '0%' }}></div>
                                <svg width="32" height="32" viewBox="0 0 54 54" fill="white"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M38.5215 20.9741C38.5395 21.2333 38.5395 21.4949 38.5395 21.7565C38.5395 29.7656 32.4431 39 21.2957 39C18 39.0048 14.7727 38.0598 12 36.2783C12.4779 36.3352 12.9588 36.364 13.4401 36.3647C16.1709 36.3687 18.8236 35.4531 20.9705 33.7654C19.7057 33.7421 18.4798 33.3239 17.4645 32.5692C16.4493 31.8145 15.6954 30.7612 15.3086 29.5568C16.2165 29.7322 17.1526 29.6969 18.0447 29.4536C16.6733 29.1764 15.44 28.4336 14.5537 27.3509C13.6675 26.2683 13.1829 24.9125 13.1821 23.5134V23.4366C14.025 23.9058 14.9683 24.1659 15.9326 24.195C14.6497 23.3379 13.7415 22.024 13.3931 20.521C13.0446 19.0179 13.282 17.4385 14.0569 16.1043C15.5785 17.9765 17.4769 19.5078 19.6287 20.5988C21.7805 21.6897 24.1377 22.316 26.5472 22.4369C26.2459 21.1378 26.381 19.7756 26.9318 18.561C27.4826 17.3464 28.4183 16.3472 29.5941 15.7179C30.7699 15.0885 32.1204 14.8643 33.4365 15.0797C34.7527 15.2951 35.9611 15.9382 36.875 16.9095C38.2319 16.6418 39.5331 16.1442 40.7224 15.4383C40.2702 16.8416 39.3234 18.0328 38.0583 18.79C39.2594 18.648 40.4325 18.3268 41.5385 17.8372C40.7266 19.0533 39.705 20.1154 38.5215 20.9741Z" />
                                </svg>
                            </div >
                        </a >
                        <div className="border-line-right" style={{ width: '1px', height: '100%' }}></div>
                    </div >
                    <a href="https://stage1.fates.world/" target="_blank" className="nav-button bg w-inline-block"
                        style={{ opacity: 1 }}></a>
                        <div className="xsm-text fade">004</div>
                        <div className="div-hide intro">
                            <div className="button-txt">
                                <div style={{
                                    transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                    transformStyle: "preserve-3d"}} >
                                    LAUNCH MIUU
                                </div>
                                <div className="button-txt-ap"></div>
                                <div style={{ transform: 'translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}></div>
                                LAUNCH MIUU</div>
                        </div >
                        <div className="bg-whipe" style={{ width: '100 %', height: '0 %' }}>
                        </div>
                </div>
            </div>
        </nav >
    </div >
</>
    )

}
