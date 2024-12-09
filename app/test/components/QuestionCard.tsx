import { Question } from '../questions';

interface QuestionCardProps {
  question: Question;
  index: number;
  register: any;
}

export default function QuestionCard({ question, index, register }: QuestionCardProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">
        {index + 1}. {question.question}
      </h3>
      <div className="space-y-2">
        {question.options.map((option) => (
          <label 
            key={option.value} 
            className="flex items-start p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-white/50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors"
          >
            <input
              type="radio"
              value={option.value}
              {...register(`answers.${index}`)}
              className="mt-0.5 mr-3"
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
} 