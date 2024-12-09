import { Question } from './questions';

export type TestResult = {
  personality: number;
  values: number;
  lifestyle: number;
  emotion: number;
  total: number;
  compatibility: number;
  chineseZodiac: number;
  ageCompatibility: number;
};

// 计算生肖匹配度
export function calculateZodiacCompatibility(date1: string, date2: string): number {
  const year1 = new Date(date1).getFullYear();
  const year2 = new Date(date2).getFullYear();
  
  const zodiac1 = (year1 - 4) % 12;
  const zodiac2 = (year2 - 4) % 12;
  
  // 更细致的生肖相合度计算
  const difference = Math.abs(zodiac1 - zodiac2);
  
  // 生肖相合规则
  const compatibilityRules = {
    0: 100,  // 同生肖
    4: 90,   // 四合
    8: 85,   // 三合
    6: 60,   // 相冲
    3: 75,   // 相刑
    1: 80,   // 相邻
    2: 70,   // 其他
    5: 65,
    7: 75,
    9: 70,
    10: 65,
    11: 80
  };

  return compatibilityRules[difference as keyof typeof compatibilityRules] || 70;
}

// 计算年龄差异影响
function calculateAgeCompatibility(date1: string, date2: string): number {
  const year1 = new Date(date1).getFullYear();
  const year2 = new Date(date2).getFullYear();
  
  const ageDiff = Math.abs(year1 - year2);
  
  if (ageDiff <= 3) return 100;
  if (ageDiff <= 5) return 90;
  if (ageDiff <= 8) return 80;
  if (ageDiff <= 10) return 70;
  return 60;
}

// 维度权重配置
const dimensionWeights = {
  personality: 0.3,
  values: 0.3,
  lifestyle: 0.2,
  emotion: 0.2
};

// 计算测评结果
export function calculateResults(
  answers: string[],
  questions: Question[],
  birthday: string,
  partnerBirthday: string
): TestResult {
  // 初始化各维度分数
  const scores = {
    personality: 0,
    values: 0,
    lifestyle: 0,
    emotion: 0,
    count: {
      personality: 0,
      values: 0,
      lifestyle: 0,
      emotion: 0
    }
  };

  // 计算每个维度的得分
  answers.forEach((answer, index) => {
    const question = questions[index];
    const option = question.options.find(opt => opt.value === answer);
    if (option) {
      scores[question.dimension] += option.score;
      scores.count[question.dimension]++;
    }
  });

  // 计算各维度的加权平均分
  const dimensions = ['personality', 'values', 'lifestyle', 'emotion'] as const;
  const averageScores = {} as Record<typeof dimensions[number], number>;
  
  dimensions.forEach(dim => {
    averageScores[dim] = scores[dim] / scores.count[dim] * 20; // 转换为百分制
  });

  // 计算加权总分
  const total = dimensions.reduce((sum, dim) => {
    return sum + averageScores[dim] * dimensionWeights[dim];
  }, 0);

  // 计算生肖匹配度
  const zodiacScore = calculateZodiacCompatibility(birthday, partnerBirthday);
  
  // 计算年龄差异影响
  const ageScore = calculateAgeCompatibility(birthday, partnerBirthday);

  // 计算最终匹配度 (性格占60%，生肖占25%，年龄占15%)
  const compatibility = total * 0.6 + zodiacScore * 0.25 + ageScore * 0.15;

  return {
    ...averageScores,
    total,
    compatibility,
    chineseZodiac: zodiacScore,
    ageCompatibility: ageScore
  };
} 