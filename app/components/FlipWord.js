import { FlipWords } from '@/components/ui/shadcn-io/flip-words'; 

export default function FlipWord({words}) {
  return (
    <FlipWords
      words={words}
      duration={3000}
      letterDelay={0.05}
      wordDelay={0.3}
    />
  );
}
