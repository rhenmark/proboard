import { LightModeIcon, DarkModeIcon, GithubIcon, Button } from "@proboard/ui"

const roundedClassName = "p-2 h-[48px] w-[48px] rounded grid place-items-center hover:bg-slate-500"
const Header = () => {
  return (
    <div className="grid grid-flow-col justify-end items-center md:px-10 gap-2">
      <Button className={roundedClassName}>
        <LightModeIcon width={28} />
      </Button>
      <Button className={roundedClassName}>
        <DarkModeIcon width={28} color="orange" />
      </Button>
      <Button className={roundedClassName}>
        <GithubIcon width={28} />
      </Button>
    </div>
  )
}

export function Index() {
  return (
    <div className="w-screen h-screen bg-slate-700">
      <div
        className="h-full grid grid-rows-[80px_1fr]"
        style={{ background: 'url(/images/header-background.svg)' }}
      >
        <Header />
        <main className="h-full grid place-items-center">
          <div className="mb-[5%]">
            <h4 className="text-8xl text-slate-300">ProBoard</h4>
            <span className="text-amber-600 text-xl border-l-8 pl-2 w-80 block">Rhen's project collection</span>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Index;
