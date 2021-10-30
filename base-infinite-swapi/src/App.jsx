import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { InfinitePeople } from "./people/InfinitePeople";
import { InfiniteSpecies } from "./species/InfiniteSpecies";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Infinite SWAPI</h1>
        {/* <InfinitePeople /> */}
        <InfiniteSpecies />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
