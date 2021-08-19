import { MilieuxSidenavItem } from 'dist/sidenav';

export const items: MilieuxSidenavItem[] = [
  {
    id: 1,
    label: 'General',
    icon: 'apps',
    opened: true,
    hasDivider: true,
    disabled: true,
    badge: 4,
    children: [
      {
        id: 10,
        label: 'Cars',
        icon: 'directions_car',
        opened: true,
        badgeColor: 'warn',
        badge: 4,
        children: [
          {
            opened: true,
            id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWZk1p8br7Epis3PYyhpg5BOqp60EjUBszqQ&usqp=CAU',
            label: 'car 1',
          },
          {
            id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR86w9Q6heLsq1hSxgGghRN6hoamzb-FEzo3Q&usqp=CAU',
            label: 'car 2',
          },
          {
            id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpz2EsitIV4aBgtCrt3hTMrHyhUxVE2guqKw&usqp=CAU',
            label: 'car 3',
          },
          {
            id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL3k7oN1lkcHaQHKuPTL6ny_6heIrStJixRQ&usqp=CAU',
            label: 'car 4',
          },
        ],
      },
      {
        id: 11,
        label: 'Nature',
        icon: 'park',
        badgeColor: 'accent',

        badge: 5,
        children: [
          {
            id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6fKS0x8mfvyZxxWpocBDu-Ab1UVOj0afq9w&usqp=CAU',
            label: 'nature 1',
          },
          {
            id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTja8yhIspNXxr6qySMy27n-exvRTqZjM-pHQ&usqp=CAU',
            label: 'nature 2',
          },
          {
            id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg50zz-PSTV4TLoFJeGY1Lfe1fqh_KwbDVdA&usqp=CAU',
            label: 'nature 3',
          },
          {
            id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi8tcVvD_pkaPffjQ_zsltwWYmg76DVtuNww&usqp=CAU',
            label: 'nature 4',
          },
          {
            id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9SJ3u-Hnu8Ux566wN2vouEn_ptQ-PNVQtPw&usqp=CAU',
            label: 'nature 5',
          },
        ],
      },
      {
        id: 12,
        label: 'Sky',
        badgeColor: 'primary',
        icon: 'cloud_queue',
        badge: 3,
        children: [
          {
            id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG6hxvr4UmLrg7HWA1AgZ-QPdDfpHTANaepA&usqp=CAU',
            label: 'sky 1',
          },
          {
            id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZb29nrf2o0rrbPXDYTPoaTf3Muob6bXM-mA&usqp=CAU',
            label: 'sky 2',
          },
          {
            id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBPtIqSftcmWU6SU71GbL8L9OO2-CYG9Ur3Q&usqp=CAU',
            label: 'sky 3',
          },
        ],
      },
      {
        id: 13,
        label: 'City',
        icon: 'apartment',
        badge: 5,
        children: [
          {
            id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAENVKWkyORcuU18GICstCznhLJITBIuTOnw&usqp=CAU',
            label: 'city 1',
          },
          {
            id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzO4-TdM7Wa-3LkM998xylKvsPOe6dPkwC_A&usqp=CAU',
            label: 'city 2',
          },
          {
            id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaAdHuHh7lDu712AqQ0jnmly6AHGIA1lRS2Q&usqp=CAU',
            label: 'city 3',
          },
          {
            id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMXCYsQAbiH_ostO0Ns5hcUa3O1mlfS55iBg&usqp=CAU',
            label: 'city 4',
          },
          {
            id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-gOiYyQYwUm4jjUyDdtd1qysLBh55tCAcw&usqp=CAU',
            label: 'city 5',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'Anime',
    icon: 'live_tv',
    badge: 5,
    children: [
      {
        id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKZV1iTfmVFpdT0BppRM2Sf2OXg0eNUEGkSg&usqp=CAU',
        label: 'anime 1',
      },
      {
        id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgaeB1KH6e2o189y-ckFHcTlaJK1VoMAmhAQ&usqp=CAU',
        label: 'anime 2',
      },
      {
        id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZWa6r9hLLL1SA-KvBCZCGnVUSN5ISJLFuQ&usqp=CAU',
        label: 'anime 3',
      },
      {
        id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwVT3IMRo97K3KBiMnz9OscNMiMfXT2W9rJA&usqp=CAU',
        label: 'anime 4',
      },
      {
        id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD-_VKGLMZdcIYd-Xl1ITJEKZJNBXSyGIV3w&usqp=CAU',
        label: 'anime 5',
      },
    ],
  },
  {
    id: 3,
    label: 'People',
    icon: 'people',
    badge: 3,
    children: [
      {
        id: 30,
        label: 'Actress',
        badge: 5,
        children: [
          {
            id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-IKRcWU_cVj6s4xfrKkzWFumMCl35s-QrQ&usqp=CAU',
            label: 'actress 1',
          },
          {
            id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxxEpaMdwmgR9_BV8cHh0k4kVEnta3r5dBcA&usqp=CAU',
            label: 'actress 2',
          },
          {
            id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRttEirqXnqx19FcxkESheJSBcWKnILIH_iMA&usqp=CAU',
            label: 'actress 3',
          },
          {
            id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg09kyLFa43_jDCmDBaYr5pG58w-cigZ4gMg&usqp=CAU',
            label: 'actress 4',
          },
          {
            id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF7LmRg43LiYcBaFV0INEohv_xt5KpwRU_iA&usqp=CAU',
            label: 'actress 5',
          },
        ],
      },
      {
        id: 31,
        label: 'Model',
        badge: 4,
        children: [
          {
            id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNw4RuOEI7GBGxGYMwMY6cBLnWDDCO5YHQWg&usqp=CAU',
            label: 'model 1',
          },
          {
            id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRikMlrnY1AF78Jq0ElF90JV2JHqLZxoloyQ&usqp=CAU',
            label: 'model 2',
          },
          {
            id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZVTvl_iwhsz9fTpJ4Oc2RXFTcA3U0X8lTQ&usqp=CAU',
            label: 'model 3',
          },
          {
            id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbytkbIzPTGeV1M39J1zpx80fxNVPdwSgmpg&usqp=CAU',
            label: 'model 4',
          },
        ],
      },
      {
        id: 32,
        label: 'Singer',
        badge: 4,
        children: [
          {
            id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9QZTkOMkLdxut8kh5qerxN5tcwqlWTtV2cA&usqp=CAU',
            label: 'singer 1',
          },
          {
            id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKbjhoAh5_5MCpS245-qh33GzLyd9NUh56Og&usqp=CAU',
            label: 'singer 2',
          },
          {
            id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlOAoxx_2EYVh_VunDCC9uPgsmwzodWqHwsQ&usqp=CAU',
            label: 'singer 3',
          },
          {
            id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbOde4l5pb6B-FpAaemdwrjFQMbuKZotF_ow&usqp=CAU',
            label: 'singer 4',
          },
        ],
      },
    ],
  },
];

export const imgUrlList = [
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWZk1p8br7Epis3PYyhpg5BOqp60EjUBszqQ&usqp=CAU',
    label: 'car 1',
  },
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR86w9Q6heLsq1hSxgGghRN6hoamzb-FEzo3Q&usqp=CAU',
    label: 'car 2',
  },
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpz2EsitIV4aBgtCrt3hTMrHyhUxVE2guqKw&usqp=CAU',
    label: 'car 3',
  },
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL3k7oN1lkcHaQHKuPTL6ny_6heIrStJixRQ&usqp=CAU',
    label: 'car 4',
  },
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6fKS0x8mfvyZxxWpocBDu-Ab1UVOj0afq9w&usqp=CAU',
    label: 'nature 1',
  },
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTja8yhIspNXxr6qySMy27n-exvRTqZjM-pHQ&usqp=CAU',
    label: 'nature 2',
  },
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg50zz-PSTV4TLoFJeGY1Lfe1fqh_KwbDVdA&usqp=CAU',
    label: 'nature 3',
  },
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi8tcVvD_pkaPffjQ_zsltwWYmg76DVtuNww&usqp=CAU',
    label: 'nature 4',
  },
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9SJ3u-Hnu8Ux566wN2vouEn_ptQ-PNVQtPw&usqp=CAU',
    label: 'nature 5',
  },
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG6hxvr4UmLrg7HWA1AgZ-QPdDfpHTANaepA&usqp=CAU',
    label: 'sky 1',
  },
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZb29nrf2o0rrbPXDYTPoaTf3Muob6bXM-mA&usqp=CAU',
    label: 'sky 2',
  },
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBPtIqSftcmWU6SU71GbL8L9OO2-CYG9Ur3Q&usqp=CAU',
    label: 'sky 3',
  },
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAENVKWkyORcuU18GICstCznhLJITBIuTOnw&usqp=CAU',
    label: 'city 1',
  },
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzO4-TdM7Wa-3LkM998xylKvsPOe6dPkwC_A&usqp=CAU',
    label: 'city 2',
  },
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaAdHuHh7lDu712AqQ0jnmly6AHGIA1lRS2Q&usqp=CAU',
    label: 'city 3',
  },
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMXCYsQAbiH_ostO0Ns5hcUa3O1mlfS55iBg&usqp=CAU',
    label: 'city 4',
  },
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-gOiYyQYwUm4jjUyDdtd1qysLBh55tCAcw&usqp=CAU',
    label: 'city 5',
  },
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKZV1iTfmVFpdT0BppRM2Sf2OXg0eNUEGkSg&usqp=CAU',
    label: 'anime 1',
  },
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgaeB1KH6e2o189y-ckFHcTlaJK1VoMAmhAQ&usqp=CAU',
    label: 'anime 2',
  },
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZWa6r9hLLL1SA-KvBCZCGnVUSN5ISJLFuQ&usqp=CAU',
    label: 'anime 3',
  },
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwVT3IMRo97K3KBiMnz9OscNMiMfXT2W9rJA&usqp=CAU',
    label: 'anime 4',
  },
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD-_VKGLMZdcIYd-Xl1ITJEKZJNBXSyGIV3w&usqp=CAU',
    label: 'anime 5',
  },
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-IKRcWU_cVj6s4xfrKkzWFumMCl35s-QrQ&usqp=CAU',
    label: 'actress 1',
  },
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxxEpaMdwmgR9_BV8cHh0k4kVEnta3r5dBcA&usqp=CAU',
    label: 'actress 2',
  },
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRttEirqXnqx19FcxkESheJSBcWKnILIH_iMA&usqp=CAU',
    label: 'actress 3',
  },
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg09kyLFa43_jDCmDBaYr5pG58w-cigZ4gMg&usqp=CAU',
    label: 'actress 4',
  },
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF7LmRg43LiYcBaFV0INEohv_xt5KpwRU_iA&usqp=CAU',
    label: 'actress 5',
  },
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNw4RuOEI7GBGxGYMwMY6cBLnWDDCO5YHQWg&usqp=CAU',
    label: 'model 1',
  },
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRikMlrnY1AF78Jq0ElF90JV2JHqLZxoloyQ&usqp=CAU',
    label: 'model 2',
  },
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZVTvl_iwhsz9fTpJ4Oc2RXFTcA3U0X8lTQ&usqp=CAU',
    label: 'model 3',
  },
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbytkbIzPTGeV1M39J1zpx80fxNVPdwSgmpg&usqp=CAU',
    label: 'model 4',
  },
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9QZTkOMkLdxut8kh5qerxN5tcwqlWTtV2cA&usqp=CAU',
    label: 'singer 1',
  },
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKbjhoAh5_5MCpS245-qh33GzLyd9NUh56Og&usqp=CAU',
    label: 'singer 2',
  },
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlOAoxx_2EYVh_VunDCC9uPgsmwzodWqHwsQ&usqp=CAU',
    label: 'singer 3',
  },
  {
    id: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbOde4l5pb6B-FpAaemdwrjFQMbuKZotF_ow&usqp=CAU',
    label: 'singer 4',
  },
];
