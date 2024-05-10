import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import {HeroParallax} from "@/components/ui/hero-parallax";
import {CanvasRevealEffectDemo} from "@/components/CanvasRealEffectDemo";
import {CardStackDemo} from "@/components/CardStackDemo";
import {AnimatedTooltipPreview} from "@/components/AnimatedTooltipPreview";

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <DeployButton />
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>

      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        {/*<Header />*/}
        <HeroParallax products={[
            {title: "The self aware", link: "", thumbnail:"https://pkzhxyrmitdgxlhqvcou.supabase.co/storage/v1/object/public/biblio-tech/13.jpg"},
          {title: "The Confident", link: "", thumbnail:"https://pkzhxyrmitdgxlhqvcou.supabase.co/storage/v1/object/public/biblio-tech/14.jpg?t=2024-05-10T08%3A14%3A35.255Z"},
            {title: "Zero to one", link: "", thumbnail:"https://pkzhxyrmitdgxlhqvcou.supabase.co/storage/v1/object/public/biblio-tech/12.jpg"}

        ]} />
        <main className="flex-1 flex flex-col gap-20">
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-4xl mb-4">Découvrez nos meilleurs livres</h2>
            <CanvasRevealEffectDemo/>
          </div>
          {/*{isSupabaseConnected ? <SignUpUserSteps/> : <ConnectSupabaseSteps/>}*/}
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold text-4xl mb-4">Témoignages preuve de notre détermination</h2>
            <CardStackDemo/>
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <h2 className="font-bold text-4xl mb-4">Une équipe engagé et dinamique</h2>
            <AnimatedTooltipPreview/>
          </div>
        </main>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{" "}
          <a
              href="https://github.com/CamCoder337"
              target="_blank"
              className="font-bold hover:underline"
              rel="noreferrer"
          >
            Camcoder337
          </a>
          &
          <a
              href="https://github.com/Etie20"
              target="_blank"
              className="font-bold hover:underline"
              rel="noreferrer"
          >
            Etie20
          </a>
        </p>
      </footer>
    </div>
  );
}
