import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '배재대학교',
      subTitle: '재학중',
      startedAt: '2021-03',
      // endedAt: '2010-02',
    },
    {
      title: '남대전 고등학교',
      subTitle: '졸업',
      startedAt: '2018-03',
      endedAt: '2021-03',
    },
  ],
};

export default education;
