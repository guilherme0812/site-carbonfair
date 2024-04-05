import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html,
    * {
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif !important;
        scroll-behavior: smooth;
    }

    body {
        padding: 0;
        margin: 0;
        overflow-x: hidden;
        scroll-behavior: smooth;
        background-color: #fff;
    }

    body::-webkit-scrollbar {
        width: 14px; /* width of the entire scrollbar */
    }

    body::-webkit-scrollbar-track {
        background: #fff; /* color of the tracking area */
    }

    body::-webkit-scrollbar-thumb {
        background-color: #b4b4b4; /* color of the scroll thumb */
        border-radius: 20px; /* roundness of the scroll thumb */
        border: 3px solid #fff; /* creates padding around scroll thumb */
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    h1, h2, h3, h4, h5, p {
        margin: 0;
        line-height: 95%;
    }

    h1 {
        font-size: 2rem
    }

    h2 {
        font-size: 1.8rem;
    }

    .super-app-theme--header {
        background-color: #60c79f;
    }


    .container {
        max-width: 1200px;
        margin: auto;
        padding: 4rem 2rem ;
    }

    .text-linear-gradient {
        background-color: #f3ec78;
        background-image: linear-gradient(to right, #8bd88d, #3dbaad);
        background-size: 100%;
        
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
    }

    .title {
        font-size: 2.5rem;
        color: "#00000";
    }

    .sub-title {
        font-size: 2rem;
        font-weight: 900;
    }

    .text-center {
        text-align: center
    }

    .text-right {
        text-align: right;
    }

    .text-opacity {
        opacity: 0.7;
    }

    .green-text {
        color: #3dbaad
    }

    .green {
        color: #83BC51
    }
    .white {
        color: white
    }

    .primary { color: #314A1F}
    .secundary { color: #517430 }
    .tertiary {color: #83BC51}

    .m-0 { margin: 0}
    .mt-1 {margin-top: 1rem}
    .mt-2 {margin-top: 2rem}
    .mt-4 {margin-top: 4rem}
    .mt--2 {margin-top: -2rem}
    .mt--4 {margin-top: -4rem}
    .mt--6 {margin-top: -6rem}
    .mb-2 {margin-bottom: 2rem}
    .mb--2 {margin-bottom: -2rem}
    .mb--4 {margin-bottom: -4rem}

    .pb--4 {padding-bottom: -4rem}
    .pb-2 {padding-bottom: 2rem}
    .p-0 {
        padding: 0
    }
    .bold {
        font-weight: bold;
    }

    .opacity {
        opacity: 0.8;
    }
    .opacity-2 {
        opacity: 0.7;
    }

    .linear-gradient {
        background-image: linear-gradient(to right, #314a1f, #517430);
    }

    .white-linear-gradient {
        background: rgb(255, 255, 255);
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 1) 10%,
            rgba(9, 9, 121, 0) 95%,
            rgba(0, 212, 255, 0) 100%
        );
    }

    .white-linear-gradient-to-top {
        background: rgb(255, 255, 255);
        background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 1) 10%,
            rgba(9, 9, 121, 0) 95%,
            rgba(0, 212, 255, 0) 100%
        );
    }
    .white-linear-gradient-1 {
        background: rgb(255, 255, 255);
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 1) 10%,
            rgba(9, 9, 121, 0) 50%,
            rgba(0, 212, 255, 0) 100%
        );
    }
    .white-linear-gradient-2 {
        background: rgb(255, 255, 255);
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 1) 10%,
            rgba(9, 9, 121, 0) 60%,
            rgba(0, 212, 255, 0) 100%
        );
    }

    .transparent-white-background{
        background-color: rgba(255, 255, 255, 0.4);
    }

    .bg-gray {
        background-color: #F5F5F5;
    }


    .carousel-container {
        position: relative;
        max-width: 1200px;
        margin: auto;

        .swipper-button {
            position: absolute;
            top: 45%;
            display: flex;
            height: 40px;
            width: 40px;
            justify-content: center;
            align-items: center;
            border-radius: 50px;
            border: 1px solid #9e9e9e;
            cursor: pointer;
            z-index: 1000;
        }

        .swipper-button:hover {
            background-color: #f5f5f5;
        }

        .swipper-button.left {
            left: -40px;

            @media (max-width: 900px) {
                left: 0;
            }
        }

        .swipper-button.right {
            right: -40px;

            @media (max-width: 900px) {
                right: 0;
            }
        }
    }

    /* .swiper-button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 8px;
        background: #ffffff;
        padding: 6px;
        cursor: pointer;
        color: #000;
        border-radius: 25px;
        transition: 0.5s ease-in;
        box-shadow: 0px 8px 20px -4px #858585;

        &:hover {
            background: #ececec;
        }
    }

    .swiper-button.left {
        position: absolute;
        top: 49%;
        left: -4rem;
        z-index: 10;
    }
    .swiper-button.right {
        position: absolute;
        top: 49%;
        right: -4rem;
        z-index: 10;
    } */
`;

export const titleProps = {
  component: "h2",
  variant: "h5",
  fontWeight: "bold",
  align: "center",
};
