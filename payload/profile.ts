import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/sample_tux.png';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '박진우',
    small: 'JPack',
  },
  contact: [
    {
      title: 'pck021227@gmail.com',
      link: 'mailto:tux@linux.org',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/pck9252/resume-nextjs',
      icon: faGithub,
    },
    {
      link: 'https://www.facebook.com/groups/ubuntu.ko',
      icon: faFacebook,
    },
  ],
  notice: {
    title:
      "",
    icon: faBell,
  },
};

export default profile;
