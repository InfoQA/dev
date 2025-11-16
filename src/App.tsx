import LayoutDefault from "@/components/layouts";
import Chat from "@/components/shared/Chat";
import Sidebar from "@/components/shared/Sidebar";
import About from "@/components/shared/About";

function App() {
  return (
    <LayoutDefault>
      <Sidebar />
      <About />
      <Chat />
    </LayoutDefault>
  );
}

export default App;
