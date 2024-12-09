export type Option = {
  value: string;
  label: string;
  score: number;
};

export type Question = {
  id: number;
  question: string;
  dimension: 'personality' | 'values' | 'lifestyle' | 'emotion';
  options: Option[];
};

export const questions: Question[] = [
  // 性格维度 (3题)
  {
    id: 1,
    question: '在社交场合中，你通常会:',
    dimension: 'personality',
    options: [
      { value: 'A', label: '主动与他人交谈，享受社交', score: 5 },
      { value: 'B', label: '等待他人来搭话，保持适度社交', score: 3 },
      { value: 'C', label: '倾向独处，避免太多社交活动', score: 1 }
    ]
  },
  {
    id: 2,
    question: '面对分歧时，你通常会:',
    dimension: 'personality',
    options: [
      { value: 'A', label: '坚持自己的观点，据理力争', score: 5 },
      { value: 'B', label: '寻找折中方案，互相妥协', score: 3 },
      { value: 'C', label: '倾向于迁就对方，避免冲突', score: 1 }
    ]
  },
  {
    id: 3,
    question: '在做重要决定时，你会:',
    dimension: 'personality',
    options: [
      { value: 'A', label: '深入分析，理性决策', score: 5 },
      { value: 'B', label: '平衡理性和感性', score: 3 },
      { value: 'C', label: '相信直觉，凭感觉行事', score: 1 }
    ]
  },

  // 价值观维度 (3题)
  {
    id: 4,
    question: '对于金钱的态度，你更倾向于:',
    dimension: 'values',
    options: [
      { value: 'A', label: '及时享受，活在当下', score: 5 },
      { value: 'B', label: '平衡储蓄与消费', score: 3 },
      { value: 'C', label: '节约为主，追求稳定', score: 1 }
    ]
  },
  {
    id: 5,
    question: '对于未来的规划，你倾向于:',
    dimension: 'values',
    options: [
      { value: 'A', label: '有明确的目标和时间表', score: 5 },
      { value: 'B', label: '有大致方向，保持灵活', score: 3 },
      { value: 'C', label: '随遇而安，顺其自然', score: 1 }
    ]
  },
  {
    id: 6,
    question: '对于生活质量，你更注重:',
    dimension: 'values',
    options: [
      { value: 'A', label: '追求品质，享受生活', score: 5 },
      { value: 'B', label: '平衡质量和实用', score: 3 },
      { value: 'C', label: '简单实用即可', score: 1 }
    ]
  },

  // 生活方式维度 (3题)
  {
    id: 7,
    question: '空闲时间，你喜欢:',
    dimension: 'lifestyle',
    options: [
      { value: 'A', label: '外出旅行或参加活动', score: 5 },
      { value: 'B', label: '在家看电影或读书', score: 3 },
      { value: 'C', label: '做一些自己的兴趣爱好', score: 1 }
    ]
  },
  {
    id: 8,
    question: '对于家务分工，你认为:',
    dimension: 'lifestyle',
    options: [
      { value: 'A', label: '严格平均分配，各尽其责', score: 5 },
      { value: 'B', label: '根据各自特长和时间安排', score: 3 },
      { value: 'C', label: '谁有空谁做，不必太计较', score: 1 }
    ]
  },
  {
    id: 9,
    question: '对于个人空间，你的态度是:',
    dimension: 'lifestyle',
    options: [
      { value: 'A', label: '需要明确的界限和独处时间', score: 5 },
      { value: 'B', label: '适度平衡亲密和独处', score: 3 },
      { value: 'C', label: '倾向于形影不离', score: 1 }
    ]
  },

  // 情感表达维度 (3题)
  {
    id: 10,
    question: '遇到问题时，你通常会:',
    dimension: 'emotion',
    options: [
      { value: 'A', label: '立即表达自己的想法和感受', score: 5 },
      { value: 'B', label: '等待合适的时机再沟通', score: 3 },
      { value: 'C', label: '自己消化，尽量不影响对方', score: 1 }
    ]
  },
  {
    id: 11,
    question: '在关系中，你最看重:',
    dimension: 'emotion',
    options: [
      { value: 'A', label: '真诚的沟通和情感交流', score: 5 },
      { value: 'B', label: '相互理解和包容', score: 3 },
      { value: 'C', label: '个人空间和自由', score: 1 }
    ]
  },
  {
    id: 12,
    question: '面对伴侣的情绪波动，你会:',
    dimension: 'emotion',
    options: [
      { value: 'A', label: '主动关心并提供情感支持', score: 5 },
      { value: 'B', label: '给予适度的关心和空间', score: 3 },
      { value: 'C', label: '等待对方自行调节', score: 1 }
    ]
  }
]; 