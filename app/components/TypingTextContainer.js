import TypingText from '@/components/ui/shadcn-io/typing-text';
export default function TypingTextContainer({text}) {
  return (
    <div className="flex items-center justify-center w-full">
      <TypingText 
        text={text}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        className="text-4xl font-bold text-center max-w-2xl"
        cursorClassName="h-12"
        textColors={['#3b82f6', '#8b5cf6', '#06b6d4']}
        variableSpeed={{ min: 50, max: 120 }}
      />
    </div>
  );
}