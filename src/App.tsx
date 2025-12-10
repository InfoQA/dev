import LayoutDefault from '@/components/layouts';
import About from '@/components/shared/About';
import Chat from '@/components/shared/Chat';
import Modal from '@/components/shared/Modal';
import Sidebar from '@/components/shared/Sidebar';
import NewChat from '@/components/shared/Sidebar/NewChat';
import useRefreshModal from '@/hooks/useRefreshModal';

function App() {
  const { showModal, closeModal, setShowModal } = useRefreshModal();

  const handleNewChatConfirm = () => {
    closeModal();
  };

  return (
    <LayoutDefault>
      <Sidebar />
      <About />
      <Chat />

      {/* Modal untuk New Chat saat refresh */}
      <Modal open={showModal} onOpenChange={setShowModal} content={<NewChat onConfirm={handleNewChatConfirm} />} />
    </LayoutDefault>
  );
}

export default App;
