import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '1차 캡스톤 디자인',
      startedAt: '2025-03',
      where: '배재대학교',
      descriptions: [
        {
          content: 'AI기반 유저 맞춤형 타로카드 애플리케이션 기획',
        },
        {
          content: '현재진행중',
          weight: 'MEDIUM',
        },
      ],
    },
  ],
};

export default project;
