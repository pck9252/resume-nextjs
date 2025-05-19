import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'C',
      level: 3,
    },
    {
      title: 'Java',
      level: 3,
    },
    {
      title: 'SQL',
      level: 3,
    },
    {
      title: 'Python',
      level: 2,
    },
    {
      title: 'Java Script',
      level: 2,
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programmingLanguages],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
