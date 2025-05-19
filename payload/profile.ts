import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/sunflower.png';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '박진우',
    small: 'Jinu',
  },
  contact: [
    {
      title: 'pck021227@gmail.com',
      link: 'mailto:pck021227@gmail.com',
      icon: faEnvelope,
    },
    {
      title: '이메일로 연락주세요',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/uyu423/resume-nextjs',
      icon: faGithub,
    },
  ],
  notice: {
    title: '이메일로 연락주세요',
    icon: faBell,
  },
};

export default profile;
