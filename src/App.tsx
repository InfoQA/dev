import LayoutDefault from "@/components/layouts";
import Chat from "@/components/shared/Chat";
import Sidebar from "@/components/shared/Sidebar";

function App() {
    return (
        <LayoutDefault>
            <Sidebar/>
            <Chat/>
        </LayoutDefault>
    );
}

export default App;
