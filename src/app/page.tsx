import { Button } from "@/components/lib";
import { StepNumber } from "@/components/ui";
import { Question1 } from "@/questions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Сюди підключай всі всі компоненти, я там далі їх скомпоную. Але важливо - мати анімації переходу */}
      <StepNumber />
      <Question1 />
      <h1 className="text-blue uppercase">heading!</h1>
      <Button variant="white">Click me!</Button>
      <Button variant="white" disabled>
        Click me!
      </Button>
      <Button variant="blue">Click me!</Button>
      <Button variant="blue" disabled>
        Click me!
      </Button>

      <Button variant="green">Click me!</Button>
      <Button variant="green" disabled>
        Click me!
      </Button>
    </main>
  );
}
