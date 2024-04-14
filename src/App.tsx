import "./App.css";
import tw from "twin.macro";
import PopoverDemo from "./components/PopoverDemo";

function App() {
  return (
    <Container>
      <AppTitle>Headless component</AppTitle>
      
      <div>
        <DescTitle>Popover</DescTitle>
        <PopoverDemo />
      </div>

      <div>
        <DescTitle>References</DescTitle>
        <ul>
          <li>
            <a href="https://www.radix-ui.com/primitives/docs/overview/getting-started">Overview - Getting started</a>
          </li>
          <li>
            <a href="https://www.radix-ui.com/primitives/docs/components/popover">Radix Primitive - Popover</a>
          </li>
          <li>
            <a href="https://github.com/radix-ui/primitives/blob/main/packages/react/popover/src/index.ts">Radix Primitive - Popover implementation</a>
          </li>
          <li>
            <a href="https://www.patterns.dev/react/compound-pattern">Compound Pattern</a>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default App;

const Container = tw.div`
  container mx-auto
  flex flex-col
  gap-y-5
`;

const AppTitle = tw.h2`
  text-lg
  font-bold
`;

const DescTitle = tw.h3`
  font-bold
`;
