import { Header } from "@/components/header";
import { enGameType, useGame } from "@/contexts/game-provider";
import { Infinite } from "@/pages/infinite";
import { Survival } from "@/pages/survival";
import { Timed } from "@/pages/timed";
import { Toaster } from "@/components/ui/toaster";

function App() {
  const { gameType } = useGame();

  return (
    <div className="flex h-screen w-screen flex-col items-center gap-14 bg-background-100 pt-24">
      <Header />

      {gameType === enGameType.TIMED && <Timed />}
      {gameType === enGameType.INFINITE && <Infinite />}
      {gameType === enGameType.PERFECTION && <Timed isPerfectionModeEnabled />}
      {gameType === enGameType.SURVIVAL && <Survival />}

      <Toaster />
    </div>
  );
}

export default App;
