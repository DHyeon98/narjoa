import Github from '@/public/images/github.svg';
import Velog from '@/public/images/velog.svg';

/**
 * 푸터에 들어갈 링크들을 상수로 관리합니다.
 */
export const FOOTER_LINK_DATA = [
  {
    IconComponent: Github,
    href: 'https://github.com/DHyeon98',
    ariaLabel: '깃허브로 이동 (새창열림)',
  },
  {
    IconComponent: Velog,
    href: 'https://velog.io/@d_hyeon/posts',
    ariaLabel: '벨로그로 이동 (새창열림)',
  },
];
