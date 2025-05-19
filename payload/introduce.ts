import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,
  contents: [
    `노력보다는 잘하자는 마인드로 열심히 공부하고 있는 개발자 지망생 박진우입니다.머신러닝과 데이터분석에 흥미를 가지고 있으며 
    앞으로의 프로젝트에서 개발 실력을 키워나갈 예정입니다.`,
  ],
  sign: 'PackJinWoo',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
