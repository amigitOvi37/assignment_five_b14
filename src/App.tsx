import { Suspense, useMemo } from "react"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import type{IStack} from "./types/StackType"
import ExploreHeader from "./explore_section/ExploreHeader.tsx"
import Available from "./explore_section/Available.tsx"
import { useState } from "react"  
import Footer from "./components/Footer.tsx"


const getStacks = async (): Promise<IStack[]> => {

  const response = await fetch('data.json');
  const data = await response.json();

  return data;
};

function App() {

  const [selectedStacks, setSelectedStacks] = useState<IStack[]>([]);
  const [currentStack, setCurrentStack] = useState<IStack | null>(null);
  const [addButtonState, setAddButtonState] = useState(false);

  const stacksPromise = useMemo(() => getStacks(), []); //create the Promise once and keep the same Promise between renders(prevents unnecessary re-renders)

  return (
    <div id="home" className="">
      <Nav />
      <Hero />
      <ExploreHeader />
      <Suspense fallback={<div>Loading stacks...</div>}>
        <Available stacksPromise={stacksPromise} selectedStacks={selectedStacks} currentStack={currentStack} setSelectedStacks={setSelectedStacks} setCurrentStack={setCurrentStack} addButtonState={addButtonState} setAddButtonState={setAddButtonState}  />
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
