import { type Project } from '../types';

export const projectsData: Project[] = [
  // FEATURED PROJECTS (exactly 3)
  {
    id: 'pooli',
    title: 'Pooli',
    summary: `가족 데이터 공유 시스템을 시각적으로 관리할 수 있는 인터랙티브 데이터 관리 서비스
테스트계정 ID: user_0000001@gmail.com PW: test1234!`,
    description:
      'Pooli는 가족 구성원이 데이터를 공유하고 관리할 수 있도록 설계된 서비스입니다. 공유 데이터 풀을 중심으로 개인 데이터와 공유 데이터를 유연하게 사용할 수 있도록 구조를 설계했으며, 가족 대표자는 구성원에게 다양한 데이터 사용 정책을 설정할 수 있습니다. 데이터 사용량을 직관적으로 이해할 수 있도록 인터랙티브 UI와 시각화를 적용하여 사용자 경험을 개선했습니다.',
    problem:
      '가족 데이터 공유 서비스에서는 데이터 사용량과 정책을 이해하기 어렵고 관리 방식이 복잡한 경우가 많습니다. 특히 데이터 사용 현황이나 제한 정책이 직관적으로 보이지 않아 사용자 경험이 떨어지는 문제가 있었습니다.',
    solution:
      '공유 데이터 풀을 중심으로 데이터 흐름을 시각적으로 표현하고, 정책 관리 인터페이스를 통해 가족 대표자가 구성원별 데이터 사용 정책을 설정할 수 있도록 설계했습니다. 데이터 사용량을 그래프로 표현하고 인터랙션을 활용해 사용자들이 현재 상태를 쉽게 이해할 수 있도록 구현했습니다.',
    role: '프론트엔드 개발 팀장 (팀 프로젝트)',
    contributions: [
      '서비스 UI/UX 디자인 설계',
      '메인 대시보드 페이지 구현',
      '정책 관리 페이지 및 구성원별 정책 페이지 개발',
      '차단 및 데이터 제한 정책 인터페이스 구현',
      '공통 UI 컴포넌트 구조 설계 및 분리',
      '데이터 사용량 원형 그래프 직접 구현',
      '커스텀 그라데이션 버튼 UI 구현',
    ],
    learnings: [
      '복잡한 데이터 정책을 직관적인 UI로 표현하는 방법',
      'Zustand를 활용한 전역 상태 관리 구조 설계',
      'TanStack Query 기반 서버 상태 관리',
      '인터랙티브 데이터 시각화 구현 경험',
      '공통 컴포넌트 설계를 통한 유지보수성 개선',
    ],
    technologies: [
      {
        name: 'React',
        category: 'frontend',
        proficiency: 'strong',
        icon: 'react',
      },
      {
        name: 'TypeScript',
        category: 'frontend',
        proficiency: 'strong',
        icon: 'typescript',
      },
      {
        name: 'Tailwind CSS',
        category: 'styling',
        proficiency: 'strong',
        icon: 'tailwind',
      },
      {
        name: 'Zustand',
        category: 'frontend',
        proficiency: 'strong',
        icon: 'zustand',
      },
      {
        name: 'TanStack Query',
        category: 'frontend',
        proficiency: 'comfortable',
        icon: 'react-query',
      },
      {
        name: 'Framer Motion',
        category: 'animation',
        proficiency: 'comfortable',
        icon: 'framer',
      },
    ],
    category: 'web-application',
    featured: true,
    image: '/images/pooli.png',
    gallery: [
      '/images/pooli-1.png',
      '/images/pooli-2.png',
      '/images/pooli-3.png',
    ],
    links: {
      github: 'https://github.com/pooli-dev/pooli-fe',
      demo: 'https://www.pooliapp.com',
      figma:
        'https://www.figma.com/design/f3JZPIcAe7kLYvRe8DZVG5/%EC%B5%9C%EC%A2%85%EC%9C%B5%ED%95%A9%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?node-id=2051-4145&t=Kcv2uJSlmArKVbWE-0',
    },
    timeline: '2026.02.1 - 현재 개발 중',
  },
  {
    id: 'damoono',
    title: 'DaMoono',
    summary: '실시간 상담과 AI 기반 상담 요약을 결합한 통합 요금제 상담 플랫폼',
    description:
      'DaMoono는 사용자 맞춤형 요금제 추천, AI 챗봇 상담, 실시간 상담사 연결, 그리고 AI 기반 상담 요약까지 하나의 흐름으로 제공하는 통신사 상담 플랫폼입니다. 사용자는 AI 챗봇을 통해 요금제를 추천받고, 해결이 어려운 경우 실시간 상담사와 연결될 수 있으며, 상담 종료 후에는 요약된 상담 내용과 후속 액션을 한눈에 확인할 수 있습니다. 프론트엔드에서는 상담 요약 페이지 UI와 상담 흐름을 설계하고, JSON 기반 요약 구조를 정의해 실제 화면에 바로 렌더링할 수 있도록 설계했습니다.',
    problem:
      '통신사 상담 서비스는 AI 챗봇, 실시간 상담, 상담 이력 확인이 분리되어 있는 경우가 많아 사용자 입장에서 흐름이 끊기기 쉽습니다. 또한 긴 상담 내용을 다시 확인하기 어렵고, 상담 종료 후 무엇을 해야 하는지 명확히 전달되지 않는 문제가 있었습니다.',
    solution:
      'AI 챗봇 상담, 실시간 상담사 연결, 상담 요약을 하나의 서비스 흐름으로 연결했습니다. 특히 상담 내용을 UI에서 바로 활용할 수 있는 JSON 구조로 정리하는 프롬프트를 설계하고, 상담 요약 페이지를 구현해 사용자가 핵심 조치, 현재 상태, 주의사항, 다음 행동을 직관적으로 확인할 수 있도록 만들었습니다.',
    role: '프론트엔드 개발 (팀 프로젝트)',
    contributions: [
      '상담 요약 페이지 UI 설계 및 구현',
      '유저용 상담 요약 프롬프트(JSON) 구조 설계',
      '상담사 WebSocket 양방향 통신 구조 설계',
      '상담 요약 및 후속 액션 제안 기능 기획',
      '실시간 상담 흐름에 맞는 화면 상태 전환 구조 설계',
    ],
    learnings: [
      'AI 응답을 UI 친화적인 JSON 구조로 설계하는 방법',
      '실시간 상담 시스템에서의 상태 흐름 설계',
      'WebSocket 기반 양방향 통신 구조 이해',
      '긴 상담 데이터를 요약 가능한 정보 구조로 변환하는 경험',
      '복잡한 상담 흐름을 사용자 중심 UI로 정리하는 방법',
    ],
    technologies: [
      {
        name: 'React',
        category: 'frontend',
        proficiency: 'strong',
        icon: 'react',
      },
      {
        name: 'TypeScript',
        category: 'frontend',
        proficiency: 'strong',
        icon: 'typescript',
      },
      {
        name: 'Vanilla Extract',
        category: 'styling',
        proficiency: 'comfortable',
        icon: 'css',
      },
      {
        name: 'Framer Motion',
        category: 'animation',
        proficiency: 'comfortable',
        icon: 'framer',
      },
      {
        name: 'Socket.IO',
        category: 'tools',
        proficiency: 'comfortable',
        icon: 'socketio',
      },
      {
        name: 'Three.js',
        category: 'frontend',
        proficiency: 'comfortable',
        icon: 'three',
      },
    ],
    category: 'web-application',
    featured: true,
    image: '/images/damoono.png',
    gallery: [
      '/images/damoono-1.png',
      '/images/damoono-2.png',
      '/images/damoono-3.png',
    ],
    links: {
      github: 'https://github.com/Da-Moono/DaMoono-Frontend',
      demo: 'https://da-moono-frontend-deploy.vercel.app/',
      figma:
        'https://www.figma.com/design/gLlzi0BI8A3EGoTf5UxbOl/%ED%94%8C%EB%A1%9C%EC%9A%B0%EC%B0%A8%ED%8A%B8?node-id=0-1&p=f&t=DDQEOCtTCeMeEhIm-0',
      videoLink: 'https://www.youtube.com/watch?v=CKL0SLVoZgQ',
    },
    timeline: '2026.01.12 - 2026.01.30',
  },
  {
    id: 'hr-copilot',
    title: 'HR Copilot',
    summary:
      'AI 기반 자연어 질의 인터페이스로 HR 데이터를 탐색할 수 있는 Copilot 시스템',
    description:
      'HR 데이터를 자연어 질문으로 탐색할 수 있도록 설계된 Copilot 서비스입니다. 사용자가 복잡한 데이터 구조를 이해하지 않아도 질문을 입력하면 관련 정보를 쉽게 확인할 수 있도록 채팅 기반 인터페이스를 구현했습니다. 자동완성 기능을 통해 질문 작성을 돕고, 메시지 흐름과 상태 관리를 고려해 자연스러운 사용자 경험을 제공하는 프론트엔드를 설계했습니다.',
    problem:
      'HR 데이터는 다양한 시스템에 분산되어 있고 구조가 복잡해 일반 사용자가 필요한 정보를 찾기 어려웠습니다. 기존 방식은 SQL이나 복잡한 필터를 사용해야 했기 때문에 접근성이 낮았습니다.',
    solution:
      '자연어 기반 Copilot 인터페이스를 통해 사용자가 질문 형태로 HR 데이터를 탐색할 수 있도록 설계했습니다. 자동완성 기능과 채팅 UI를 결합해 질문 작성 과정을 단순화하고, 메시지 기반 인터페이스로 결과를 직관적으로 확인할 수 있도록 구현했습니다.',
    role: '프론트엔드 개발 팀장 (팀 프로젝트)',
    contributions: [
      '프론트엔드 100% 구현',
      'React 기반 Copilot 채팅 인터페이스 설계 및 구현',
      '질문 입력을 돕는 자동완성 기능 개발',
      '채팅 메시지 흐름 및 상태 관리 구조 설계',
      '컴포넌트 구조 리팩토링을 통한 유지보수성 개선',
      '사용자 질문 입력 경험을 고려한 UI/UX 설계',
    ],
    learnings: [
      'AI Copilot 인터페이스 설계 방식',
      '채팅 기반 UI에서의 상태 관리 전략',
      '자동완성 UX와 입력 경험 설계',
      '복잡한 기능을 단순한 인터페이스로 전달하는 방법',
    ],
    technologies: [
      {
        name: 'React',
        category: 'frontend',
        proficiency: 'strong',
        icon: 'react',
      },
      {
        name: 'TypeScript',
        category: 'frontend',
        proficiency: 'strong',
        icon: 'typescript',
      },
      {
        name: 'CSS',
        category: 'styling',
        proficiency: 'strong',
        icon: 'css',
      },
    ],
    category: 'web-application',
    featured: true,
    image: '/images/hr.png',
    gallery: ['/images/hr-2.png', '/images/hr-3.png', '/images/hr-4.png'],
    links: {
      github: 'https://github.com/DGU-CAPSTONE-HALLASAN-21/FRONT',
      demo: 'https://hrcopilot-front.vercel.app/',
      videoLink: 'https://youtu.be/Jg2I9c-D8MQ?si=cUSDBmeGwPcgmF0K',
    },
    timeline: '2025.03 - 2025.12',
  },

  // Archive Projects
  {
    id: 'code-kids',
    title: 'Code-kids',
    summary:
      'Blockly를 활용해 객체 지향 개념을 쉽고 직관적으로 학습할 수 있도록 만든 교육용 웹 프로그램',
    description:
      'Code-kids는 객체 지향 프로그래밍의 핵심 개념을 더 쉽고 친숙하게 이해할 수 있도록 기획한 교육용 프로그램입니다. 추상화, 캡슐화, 상속, 다형성과 같은 개념을 이론 설명, 블록 코딩 실습, 퀴즈 흐름으로 연결해 학습할 수 있도록 구성했습니다. 특히 Blockly 오픈소스를 활용해 블록을 직접 조합하며 문제를 해결하는 워크스페이스를 구현해, 추상적인 개념을 시각적으로 이해할 수 있도록 했습니다.',
    problem:
      '객체 지향 프로그래밍은 개념이 추상적이어서 처음 배우는 학습자가 어렵게 느끼기 쉽고, 단순 이론 설명만으로는 실제 이해로 이어지기 어려운 문제가 있었습니다.',
    solution:
      'Blockly 기반의 블록 코딩 인터페이스를 도입해 객체 지향 개념을 시각적으로 학습할 수 있도록 만들었습니다. 이론 페이지, 문제 풀이, 퀴즈를 하나의 학습 흐름으로 연결하고, 단계별 힌트와 정답 확인 기능을 통해 개념 이해와 반복 학습이 가능하도록 설계했습니다.',
    role: '프론트엔드 개발 (팀 프로젝트)',
    contributions: [
      '문제 페이지 및 Blockly 워크스페이스 구현',
      '퀴즈 페이지 UI 및 풀이 흐름 구현',
      'React 환경에서 Blockly 오픈소스 연동',
      '커스텀 블록 정의 및 generator 코드 적용',
      '단계별 힌트와 문제 풀이 인터랙션 구현',
    ],
    learnings: [
      'Blockly 오픈소스를 React 프로젝트에 통합하는 방법',
      '추상적인 개념을 시각적 인터랙션으로 전달하는 UX 설계',
      '커스텀 블록 정의와 코드 생성 구조 이해',
      '교육용 서비스에서 학습 흐름을 설계하는 방법',
    ],
    technologies: [
      {
        name: 'React',
        category: 'frontend',
        proficiency: 'strong',
        icon: 'react',
      },
      {
        name: 'JavaScript',
        category: 'frontend',
        proficiency: 'comfortable',
        icon: 'javascript',
      },
      {
        name: 'Blockly',
        category: 'tools',
        proficiency: 'comfortable',
        icon: 'api',
      },
      {
        name: 'CSS',
        category: 'styling',
        proficiency: 'strong',
        icon: 'css',
      },
    ],
    category: 'web-application',
    featured: false,
    image: '/images/codekids.png', // Using placeholder image since code-kids specific image doesn't exist
    gallery: ['/images/codekids-1.png', '/images/codekids-2.png'],
    links: {
      github: 'https://github.com/CSID-DGU/2024-1-OSS-team-5-OOP',
      figma:
        'https://www.figma.com/design/WY3utWkVzDiC9EkUISWOdd/%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5%EA%B5%90%EC%9C%A1%EC%9A%A9%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D?node-id=173-2&p=f&t=qvlQRtEU8nZrmvXc-0',
      demo: 'https://2024-1-oss-team-5-oop.vercel.app/tutorial',
    },
    timeline: '2024.03 - 2024.06',
  },
  {
    id: 'devgochi',
    title: 'DevGochi',
    summary:
      '미니게임 플레이 결과를 경험치와 캐릭터 성장으로 연결한 웹 기반 육성 게임 서비스',
    description:
      'DevGochi는 세 가지 미니게임을 플레이하며 경험치를 획득하고, 이를 바탕으로 메인 캐릭터가 성장하는 웹 기반 육성 게임입니다. 단순히 개별 게임을 구현하는 데서 끝나지 않고, 메인 화면과 게임 화면, 결과 화면을 하나의 사용자 흐름으로 연결해 서비스처럼 느껴지도록 설계했습니다. 저는 팀장으로서 UI를 설계하고 Running Man 미니게임을 개발했으며, 점프 상태 관리, 충돌 판정, 스프라이트 애니메이션, localStorage 기반 성장 데이터 유지까지 프론트엔드 관점에서 구조를 고민하며 구현했습니다.',
    problem:
      '기존 육성형 콘텐츠는 상호작용이 단조롭고, 사용자의 플레이 결과가 캐릭터 성장에 유기적으로 연결되지 않는 경우가 많았습니다. 또한 팀 프로젝트 특성상 각자 게임을 나누어 개발하다 보면 화면 흐름과 사용자 경험이 분절될 수 있다는 문제도 있었습니다.',
    solution:
      '미니게임 결과가 즉시 경험치와 레벨에 반영되는 구조를 설계하고, 메인 → 플레이 → 결과로 이어지는 사용자 흐름을 분리해 서비스처럼 동작하도록 구현했습니다. 특히 Running Man에서는 점프 상태 관리, 충돌 판정, 렌더링 최적화를 직접 설계했고, localStorage와 custom hook을 활용해 세션이 종료되어도 성장 데이터가 유지되도록 만들었습니다.',
    role: '프론트엔드 개발 팀장 (팀 프로젝트)',
    contributions: [
      'Figma 기반 전체 UI 설계',
      'Running Man 미니게임 개발',
      '메인 → 게임 → 결과 화면 흐름 구조 설계',
      '점프 상태 관리 및 이단 점프 방지 로직 구현',
      'useRef와 forwardRef를 활용한 충돌 판정 구현',
      'React.memo와 useCallback 기반 렌더링 최적화 적용',
      'localStorage 및 useCharacter 커스텀 훅 설계',
      '게임 인트로 UI 구현 및 Help Modal 구현',
    ],
    learnings: [
      '게임형 인터페이스를 서비스 흐름으로 설계하는 방법',
      'requestAnimationFrame 기반 게임 루프 최적화',
      'forwardRef와 DOM 좌표를 활용한 충돌 판정 방식',
      '브라우저 저장소와 React 상태를 연결하는 커스텀 훅 설계',
      '팀 프로젝트에서 기능 분담과 UI 일관성을 맞추는 방법',
    ],
    technologies: [
      {
        name: 'React',
        category: 'frontend',
        proficiency: 'strong',
        icon: 'react',
      },
      {
        name: 'TypeScript',
        category: 'frontend',
        proficiency: 'strong',
        icon: 'typescript',
      },
      {
        name: 'Vite',
        category: 'tools',
        proficiency: 'comfortable',
        icon: 'vite',
      },
      {
        name: 'Styled Components',
        category: 'styling',
        proficiency: 'comfortable',
        icon: 'styled-components',
      },
      {
        name: 'Framer Motion',
        category: 'animation',
        proficiency: 'comfortable',
        icon: 'framer',
      },
    ],
    category: 'web-application',
    featured: false,
    image: '/images/devgochi.png',
    gallery: ['/images/devgochi-1.png', '/images/devgochi-2.png'],
    links: {
      github: 'https://github.com/haeni82/Devgochi',
      demo: 'https://devgochi.vercel.app/',
      figma:
        'https://www.figma.com/design/tLF3T01T8GtUgsAzCT0Yap/DEV-GOTCHI?node-id=46-41&t=9NEaW5poUwymlarN-0',
      videoLink: 'https://youtu.be/4M1HJATS2FQ?si=dPp7dbeySoob740L', // 로컬 동영상 파일 예시 (실제 파일은 용량 문제로 제외)
    },
    timeline: '2 weeks',
  },
  {
    id: 'era-map',
    title: 'ERA',
    summary: '교통 약자를 위한 편의시설 기반 길찾기 지도 서비스',
    description:
      'ERA는 교통 약자를 위한 전용 지도 서비스로, 지하철 역사 내 엘리베이터 경로와 저상버스 기반 길찾기를 제공하는 애플리케이션입니다. 지도 위에 장애인 편의시설과 즐겨찾기 장소를 마커로 표시하고, 사용자가 직접 편의시설 등록을 요청할 수 있는 기능을 통해 접근성 정보를 확장할 수 있도록 설계했습니다.',
    problem:
      '일반 지도 서비스에서는 교통 약자를 위한 접근성 정보가 부족해 휠체어 이용자나 이동이 불편한 사용자가 실제 이동 가능한 경로를 찾기 어렵다는 문제가 있었습니다.',
    solution:
      'T Map API 기반 지도 서비스를 구현하고, 엘리베이터 이동 경로와 저상버스 정보를 반영한 길찾기 기능을 제공했습니다. 또한 장애인 편의시설과 즐겨찾기 장소를 마커로 표시하고, 편의시설 등록 요청 기능을 통해 사용자 참여형 접근성 정보를 구축했습니다.',
    role: '프론트엔드 개발 (팀 프로젝트)',
    contributions: [
      'T Map API 기반 지도 및 마커 기능 구현',
      '장소 검색 시 편의시설 및 즐겨찾기 신청 UI 구현',
      '길찾기 결과 화면 및 상세 경로 뷰 구현',
    ],
    learnings: [
      '지도 API를 활용한 위치 기반 서비스 구현',
      '마커와 사용자 데이터 기반 지도 UI 설계',
      '접근성 중심 서비스 기능 설계 경험',
    ],
    technologies: [
      {
        name: 'React',
        category: 'frontend',
        proficiency: 'strong',
        icon: 'react',
      },
      {
        name: 'JavaScript',
        category: 'frontend',
        proficiency: 'comfortable',
        icon: 'javascript',
      },
      {
        name: 'T Map API',
        category: 'tools',
        proficiency: 'comfortable',
        icon: 'api',
      },
      {
        name: 'CSS',
        category: 'styling',
        proficiency: 'strong',
        icon: 'css',
      },
    ],
    category: 'web-application',
    featured: false,
    image: '/images/era.png',
    gallery: ['/images/era-1.png', '/images/era-2.png', '/images/era-4.png'],
    links: {
      github: 'https://github.com/Dongguk-founder',
    },
    timeline: '2023.11 ~ 2023.12',
  },
];
