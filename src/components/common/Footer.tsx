import { SiNotion } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-brand_2 flex justify-center items-center py-4 gap-8 font-sans">
      <div className="flex items-center space-x-4 mb-2 mt-3">
        <a href="https://github.com/WithUS-ZB" target="_blank" rel="noopener noreferrer">
          <FaGithub size={28} />
        </a>
        <a
          href="https://www.notion.so/With-Us-8db7e62661cb49fe9e04fd9acd39c8e1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiNotion size={28} />
        </a>
        <p>제로베이스 모임 개최 및 참여 팀 프로젝트 With Me</p>
      </div>
      <div className="text-white sm:hidden">
        <div className="flex space-x-4 text-md">
          <div className="flex gap-2 border-2 py-1 px-3 rounded-2xl">
            <p>FE</p>
            <p>우승찬</p>
            <p>이수광</p>
          </div>
          <div className="flex gap-2 border-2 py-1 px-3 rounded-2xl">
            <p>BE</p>
            <p>임국희</p>
            <p>박지은</p>
            <p>박강락</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
