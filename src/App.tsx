import { Suspense } from "react"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import type{IStack} from "./types/StackType"
import ExploreHeader from "./explore_section/ExploreHeader.tsx"
import Available from "./explore_section/Available.tsx"
import { useState } from "react"  


const getStacks = async (): Promise<IStack[]> => {

  const response = await fetch('data.json');
  const data = await response.json();

  return data;
};

function App() {

  const [selectedStacks, setSelectedStacks] = useState<IStack[]>([]);
  const [currentStack, setCurrentStack] = useState<IStack | null>(null);

  return (
    <div className="">
      <Nav />
      <Hero />
      <ExploreHeader />
      <Suspense fallback={<div>Loading stacks...</div>}>
        <Available stacksPromise={getStacks()} selectedStacks={selectedStacks} currentStack={currentStack} setSelectedStacks={setSelectedStacks} setCurrentStack={setCurrentStack} />
      </Suspense>
    </div>
  )
}

export default App
