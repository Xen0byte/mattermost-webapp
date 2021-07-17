// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

const Logo = (): JSX.Element => {
    return (
        <svg
            width='170'
            height='28'
            viewBox='0 0 170 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M65.0077 13.909C65.0077 13.4849 64.9366 13.1398 64.7946 12.8742C64.653 12.6094 64.4578 12.4011 64.2095 12.2512C63.9613 12.1006 63.6552 11.9987 63.2918 11.946C62.9281 11.8929 62.5246 11.8665 62.0812 11.8665C61.1235 11.8665 60.104 12.052 59.0221 12.4233C58.7736 11.9635 58.5876 11.53 58.4637 11.1234C58.3395 10.7167 58.2771 10.2304 58.2771 9.6642C59.0576 9.39899 59.8377 9.20449 60.6182 9.0807C61.3983 8.95691 62.1259 8.89485 62.7994 8.89485C64.6439 8.89485 66.0848 9.33692 67.1224 10.2216C68.1598 11.1059 68.6785 12.5205 68.6785 14.466V22.4248C68.0577 22.6193 67.304 22.8052 66.4172 22.982C65.5309 23.1589 64.5287 23.2474 63.4114 23.2474C62.5069 23.2474 61.6777 23.1677 60.9239 23.0085C60.1703 22.8494 59.5228 22.5839 58.9825 22.2125C58.4412 21.8415 58.0246 21.3638 57.7317 20.7801C57.4394 20.1963 57.293 19.4801 57.293 18.6311C57.293 17.7824 57.4748 17.0705 57.8383 16.4957C58.2018 15.921 58.672 15.4609 59.248 15.1162C59.8246 14.7713 60.4674 14.5237 61.1769 14.3733C61.8863 14.2229 62.5955 14.1477 63.3049 14.1477C63.8193 14.1477 64.3867 14.1745 65.0077 14.2273V13.909ZM65.0077 16.6417C64.7946 16.6062 64.5642 16.575 64.3156 16.5487C64.0674 16.5223 63.8461 16.509 63.6508 16.509C62.7817 16.509 62.0944 16.6635 61.5889 16.9732C61.0836 17.2826 60.8309 17.7824 60.8309 18.472C60.8309 18.9321 60.9285 19.2855 61.1235 19.5334C61.3186 19.7808 61.5537 19.9621 61.8285 20.0769C62.1034 20.192 62.3957 20.2627 62.7062 20.2894C63.0169 20.3156 63.2872 20.3294 63.5175 20.3294C63.7837 20.3294 64.0498 20.307 64.3156 20.2627C64.5819 20.2185 64.8123 20.179 65.0077 20.1434V16.6417ZM71.1969 12.0784H69.4677L69.3344 11.5478L74.3093 5.20729H74.9211V9.21313H78.1398C78.1927 9.47869 78.2284 9.71728 78.2464 9.92942C78.2638 10.1419 78.2726 10.3628 78.2726 10.593C78.2726 10.8404 78.2638 11.0791 78.2464 11.3091C78.2284 11.5392 78.1927 11.7956 78.1398 12.0784H74.9211V17.4641C74.9211 18.0121 74.9656 18.4542 75.0544 18.7905C75.1426 19.1261 75.2713 19.3916 75.4397 19.5863C75.6085 19.7808 75.8166 19.9134 76.0649 19.9841C76.3131 20.0552 76.6061 20.0904 76.9426 20.0904C77.2089 20.0904 77.4702 20.0682 77.7277 20.024C77.9846 19.9799 78.2107 19.94 78.4058 19.9048C78.5302 20.2403 78.6185 20.5898 78.6719 20.9526C78.7253 21.3151 78.7516 21.6381 78.7516 21.921C78.7516 22.1155 78.7474 22.279 78.7383 22.4117C78.7295 22.5442 78.7164 22.6729 78.6984 22.7963C77.8827 22.9912 77.0405 23.088 76.1715 23.088C74.5575 23.088 73.3248 22.7124 72.4737 21.961C71.6225 21.2091 71.1969 19.9841 71.1969 18.2863V12.0784ZM81.1773 12.0784H79.4484L79.3151 11.5478L84.2898 5.20729H84.9016V9.21313H88.1204C88.1734 9.47869 88.2091 9.71728 88.227 9.92942C88.2443 10.1419 88.2533 10.3628 88.2533 10.593C88.2533 10.8404 88.2443 11.0791 88.227 11.3091C88.2091 11.5392 88.1734 11.7956 88.1204 12.0784H84.9016V17.4641C84.9016 18.0121 84.9463 18.4542 85.0348 18.7905C85.1235 19.1261 85.2521 19.3916 85.4204 19.5863C85.5891 19.7808 85.797 19.9134 86.0456 19.9841C86.2937 20.0552 86.5867 20.0904 86.9232 20.0904C87.1893 20.0904 87.4508 20.0682 87.7082 20.024C87.9653 19.9799 88.1915 19.94 88.3865 19.9048C88.5106 20.2403 88.5992 20.5898 88.6523 20.9526C88.7058 21.3151 88.7323 21.6381 88.7323 21.921C88.7323 22.1155 88.7279 22.279 88.7189 22.4117C88.7102 22.5442 88.697 22.6729 88.6791 22.7963C87.8633 22.9912 87.0213 23.088 86.1519 23.088C84.5382 23.088 83.3055 22.7124 82.4543 21.961C81.6031 21.2091 81.1773 19.9841 81.1773 18.2863V12.0784ZM98.6514 14.5991C98.616 13.7497 98.3808 13.0647 97.9464 12.5429C97.5119 12.0211 96.9046 11.76 96.1241 11.76C95.2374 11.76 94.5635 12.0077 94.1024 12.5029C93.6414 12.9982 93.3667 13.6968 93.2781 14.5991H98.6514ZM93.2512 17.2252C93.3223 18.2863 93.6946 19.0557 94.3685 19.5334C95.0424 20.0109 95.9291 20.2497 97.0289 20.2497C97.6318 20.2497 98.2477 20.192 98.8775 20.0769C99.5071 19.9621 100.105 19.7984 100.673 19.5863C100.868 19.94 101.037 20.3645 101.179 20.8598C101.32 21.3546 101.4 21.8856 101.418 22.4514C100.035 22.982 98.4738 23.2474 96.7357 23.2474C95.4591 23.2474 94.3643 23.0705 93.4505 22.7166C92.5374 22.3631 91.7925 21.872 91.2162 21.2446C90.6398 20.6166 90.214 19.8693 89.9393 19.0025C89.6645 18.1359 89.5273 17.1899 89.5273 16.1643C89.5273 15.156 89.6689 14.2098 89.9527 13.3255C90.2361 12.4408 90.6575 11.6718 91.2162 11.0176C91.7748 10.3628 92.4663 9.84564 93.2912 9.46529C94.1158 9.08511 95.0779 8.89485 96.1773 8.89485C97.135 8.89485 97.9863 9.06289 98.7311 9.39899C99.476 9.73491 100.11 10.195 100.633 10.7788C101.156 11.362 101.551 12.0565 101.817 12.8612C102.083 13.6658 102.216 14.5283 102.216 15.4477C102.216 15.7838 102.203 16.1156 102.176 16.4426C102.15 16.7695 102.118 17.0307 102.083 17.2252H93.2512ZM103.659 9.21313C103.925 9.1604 104.177 9.12038 104.417 9.09409C104.656 9.06713 104.918 9.05407 105.202 9.05407C105.468 9.05407 105.729 9.07205 105.986 9.10698C106.244 9.14242 106.496 9.18685 106.744 9.23993C106.798 9.32844 106.847 9.45647 106.891 9.62452C106.935 9.79257 106.975 9.96943 107.01 10.1553C107.046 10.341 107.077 10.5263 107.103 10.7123C107.13 10.8982 107.152 11.0523 107.17 11.1768C107.56 10.6282 108.039 10.1373 108.607 9.70422C109.174 9.27079 109.884 9.05407 110.735 9.05407C110.912 9.05407 111.116 9.06289 111.347 9.0807C111.577 9.09833 111.745 9.12479 111.852 9.1604C111.887 9.33692 111.914 9.54041 111.932 9.77035C111.95 10.0003 111.958 10.2391 111.958 10.4868C111.958 10.7875 111.945 11.1146 111.919 11.4683C111.892 11.822 111.843 12.158 111.772 12.4764C111.577 12.4408 111.36 12.4233 111.121 12.4233C110.881 12.4233 110.735 12.4233 110.682 12.4233C110.38 12.4233 110.043 12.4544 109.67 12.5161C109.298 12.5782 108.944 12.7416 108.607 13.0072C108.269 13.2724 107.99 13.6704 107.768 14.2011C107.547 14.7314 107.436 15.4743 107.436 16.4295V22.9557C107.117 23.0085 106.798 23.0439 106.478 23.0615C106.159 23.0794 105.849 23.088 105.547 23.088C105.246 23.088 104.94 23.0794 104.629 23.0615C104.319 23.0439 103.996 23.0085 103.659 22.9557V9.21313ZM113.729 9.21313C113.977 9.1604 114.226 9.12038 114.474 9.09409C114.722 9.06713 114.997 9.05407 115.299 9.05407C115.6 9.05407 115.866 9.06713 116.097 9.09409C116.327 9.12038 116.567 9.1604 116.815 9.21313C116.868 9.30165 116.917 9.43002 116.961 9.59807C117.005 9.76595 117.046 9.94315 117.081 10.1285C117.117 10.3143 117.147 10.4955 117.174 10.6723C117.201 10.8492 117.223 10.9996 117.241 11.1234C117.382 10.8583 117.569 10.593 117.799 10.3274C118.03 10.0625 118.305 9.82394 118.624 9.61129C118.943 9.39899 119.302 9.22653 119.701 9.09409C120.1 8.96115 120.548 8.89485 121.045 8.89485C123.19 8.89485 124.565 9.70863 125.168 11.3359C125.522 10.6813 126.023 10.1112 126.671 9.62452C127.318 9.13801 128.138 8.89485 129.132 8.89485C130.692 8.89485 131.84 9.32421 132.576 10.1819C133.313 11.0394 133.68 12.3792 133.68 14.2011V22.9291C133.042 23.0353 132.412 23.088 131.792 23.088C131.171 23.088 130.541 23.0353 129.903 22.9291V15.1823C129.903 14.2273 129.783 13.4935 129.544 12.9807C129.304 12.4678 128.821 12.2112 128.094 12.2112C127.792 12.2112 127.496 12.2556 127.203 12.3438C126.91 12.432 126.644 12.5956 126.405 12.8346C126.166 13.0733 125.971 13.4096 125.82 13.8428C125.669 14.2758 125.593 14.8377 125.593 15.5274V22.9291C124.955 23.0353 124.325 23.088 123.705 23.088C123.084 23.088 122.454 23.0353 121.816 22.9291V15.1823C121.816 14.2273 121.696 13.4935 121.457 12.9807C121.217 12.4678 120.734 12.2112 120.007 12.2112C119.706 12.2112 119.404 12.2556 119.103 12.3438C118.801 12.432 118.531 12.6046 118.291 12.8612C118.052 13.1174 117.861 13.4755 117.719 13.9356C117.577 14.3953 117.506 14.9968 117.506 15.7395V22.9291C116.868 23.0353 116.239 23.088 115.618 23.088C114.997 23.088 114.368 23.0353 113.729 22.9291V9.21313ZM141.374 20.3821C142.367 20.3821 143.081 20.0153 143.515 19.2811C143.949 18.5473 144.167 17.4904 144.167 16.1111C144.167 14.7314 143.949 13.6748 143.515 12.9407C143.081 12.2065 142.367 11.8397 141.374 11.8397C140.398 11.8397 139.693 12.2065 139.259 12.9407C138.824 13.6748 138.607 14.7314 138.607 16.1111C138.607 17.4904 138.824 18.5473 139.259 19.2811C139.693 20.0153 140.398 20.3821 141.374 20.3821ZM141.374 23.2474C140.256 23.2474 139.285 23.066 138.461 22.7034C137.636 22.341 136.953 21.8369 136.412 21.1911C135.871 20.5456 135.463 19.7896 135.189 18.9229C134.914 18.0562 134.776 17.1192 134.776 16.1111C134.776 15.1029 134.914 14.1566 135.189 13.2724C135.463 12.3881 135.871 11.6231 136.412 10.9776C136.953 10.3318 137.636 9.82394 138.461 9.45206C139.285 9.0807 140.256 8.89485 141.374 8.89485C142.491 8.89485 143.466 9.0807 144.3 9.45206C145.133 9.82394 145.825 10.3318 146.375 10.9776C146.925 11.6231 147.332 12.3881 147.599 13.2724C147.865 14.1566 147.997 15.1029 147.997 16.1111C147.997 17.1192 147.865 18.0562 147.599 18.9229C147.332 19.7896 146.925 20.5456 146.375 21.1911C145.825 21.8369 145.133 22.341 144.3 22.7034C143.466 23.066 142.491 23.2474 141.374 23.2474ZM152.1 16.9599C151.107 16.6768 150.331 16.2569 149.773 15.6997C149.214 15.1428 148.935 14.307 148.935 13.1925C148.935 11.8483 149.418 10.7964 150.385 10.0359C151.351 9.2752 152.668 8.89485 154.335 8.89485C155.027 8.89485 155.709 8.95691 156.383 9.0807C157.057 9.20449 157.74 9.39 158.431 9.63792C158.396 10.0975 158.307 10.575 158.165 11.0705C158.024 11.5655 157.855 11.9987 157.66 12.3706C157.234 12.1936 156.765 12.0387 156.25 11.906C155.736 11.7735 155.195 11.7072 154.628 11.7072C154.025 11.7072 153.555 11.8 153.218 11.9857C152.881 12.1715 152.712 12.4678 152.712 12.8742C152.712 13.2634 152.832 13.5376 153.071 13.6968C153.311 13.8559 153.652 14.0066 154.095 14.1477L155.612 14.5991C156.108 14.7404 156.556 14.9127 156.955 15.1162C157.354 15.3197 157.696 15.5716 157.979 15.8721C158.263 16.1728 158.485 16.5443 158.644 16.9864C158.804 17.4286 158.884 17.9679 158.884 18.6045C158.884 19.2592 158.746 19.8693 158.471 20.4352C158.197 21.0012 157.797 21.492 157.274 21.9074C156.751 22.3234 156.117 22.6505 155.372 22.8891C154.628 23.128 153.785 23.2474 152.845 23.2474C152.419 23.2474 152.03 23.234 151.675 23.2076C151.32 23.1808 150.979 23.1367 150.651 23.0749C150.323 23.0129 149.999 22.9379 149.68 22.8494C149.36 22.7611 149.015 22.6461 148.642 22.5045C148.678 22.0268 148.762 21.5449 148.895 21.0587C149.028 20.5725 149.201 20.0991 149.414 19.6392C149.999 19.8693 150.553 20.0416 151.076 20.1566C151.6 20.2717 152.145 20.3294 152.712 20.3294C152.961 20.3294 153.231 20.307 153.523 20.2627C153.816 20.2185 154.087 20.1389 154.335 20.024C154.583 19.909 154.792 19.7586 154.96 19.5731C155.129 19.3874 155.213 19.1442 155.213 18.8432C155.213 18.4191 155.084 18.1139 154.827 17.9282C154.57 17.7427 154.211 17.5785 153.75 17.4373L152.1 16.9599ZM161.301 12.0784H159.573L159.439 11.5478L164.414 5.20729H165.025V9.21313H168.244C168.298 9.47869 168.333 9.71728 168.351 9.92942C168.368 10.1419 168.378 10.3628 168.378 10.593C168.378 10.8404 168.368 11.0791 168.351 11.3091C168.333 11.5392 168.298 11.7956 168.244 12.0784H165.025V17.4641C165.025 18.0121 165.07 18.4542 165.159 18.7905C165.248 19.1261 165.376 19.3916 165.544 19.5863C165.713 19.7808 165.921 19.9134 166.169 19.9841C166.418 20.0552 166.711 20.0904 167.047 20.0904C167.313 20.0904 167.575 20.0682 167.832 20.024C168.089 19.9799 168.315 19.94 168.51 19.9048C168.635 20.2403 168.723 20.5898 168.776 20.9526C168.83 21.3151 168.856 21.6381 168.856 21.921C168.856 22.1155 168.852 22.279 168.843 22.4117C168.834 22.5442 168.821 22.6729 168.803 22.7963C167.987 22.9912 167.145 23.088 166.276 23.088C164.662 23.088 163.429 22.7124 162.578 21.961C161.727 21.2091 161.301 19.9841 161.301 18.2863V12.0784ZM36.6468 5.01364C37.4155 4.90698 38.155 4.85339 38.8657 4.85339C39.6151 4.85339 40.3549 4.90698 41.0849 5.01364L45.8399 14.8562L50.739 5.01364C51.3346 4.90698 51.9971 4.85339 52.7274 4.85339C53.4575 4.85339 54.1584 4.90698 54.831 5.01364L55.8108 23.0873C55.081 23.1942 54.3893 23.2474 53.7362 23.2474C53.0826 23.2474 52.4393 23.1942 51.8054 23.0873L51.2865 10.0198L47.079 19.0515C46.8098 19.0871 46.5314 19.1186 46.2431 19.1449C45.9549 19.1717 45.667 19.1849 45.3786 19.1849C45.1287 19.1849 44.8792 19.1761 44.6296 19.1583C44.3798 19.1405 44.1205 19.1047 43.8513 19.0515L39.9322 9.83259L39.5287 23.0873C38.914 23.1942 38.3184 23.2474 37.7418 23.2474C37.127 23.2474 36.4927 23.1942 35.84 23.0873L36.6468 5.01364Z'
                fill='var(--button-bg)'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M18.7948 11.4403C18.7948 11.4403 18.8382 13.3508 17.5134 14.6487C16.1884 15.9466 14.5611 15.828 13.5025 15.4695C12.4437 15.1111 11.079 14.2168 10.8149 12.3811C10.5508 10.5453 11.7458 9.05398 11.7458 9.05398L14.3497 5.81577L15.8663 3.96632L17.1681 2.35463C17.1681 2.35463 17.7655 1.55441 17.9358 1.38925C17.9695 1.35653 18.0041 1.33505 18.038 1.31852L18.0627 1.30591L18.0672 1.3042C18.1388 1.27335 18.2213 1.26671 18.3009 1.29364C18.3787 1.32006 18.4391 1.37357 18.4773 1.43953L18.4853 1.45232L18.4923 1.46698C18.5108 1.50209 18.5263 1.54214 18.5337 1.59157C18.5684 1.82626 18.557 2.82488 18.557 2.82488L18.6121 4.89573L18.6934 7.28616L18.7948 11.4403ZM22.1655 2.67214C26.9815 6.17725 29.1903 12.5383 27.1819 18.4877C24.7101 25.8095 16.7872 29.7357 9.48576 27.2572C2.18429 24.7785 -1.73091 16.8337 0.740758 9.51193C2.75249 3.55281 8.37502 -0.156665 14.3346 0.00508354L12.4243 2.26837C8.88883 2.90939 5.83622 5.33051 4.63642 8.88471C2.85125 14.1726 5.84335 19.9664 11.3195 21.8253C16.7956 23.6842 22.682 20.9045 24.4672 15.6166C25.6631 12.0742 24.7149 8.30504 22.3125 5.6436L22.1655 2.67214Z'
                fill='var(--button-bg)'
            />
        </svg>
    );
};

export default Logo;