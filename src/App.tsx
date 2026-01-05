import LayoutDefault from '@/components/layouts';
import About from '@/components/shared/About';
import Chat from '@/components/shared/Chat';
import Modal from '@/components/shared/Modal';
import Sidebar from '@/components/shared/Sidebar';
import NewChat from '@/components/shared/Sidebar/NewChat';
import useRefreshModal from '@/hooks/useRefreshModal';
import { useEffect } from 'react';
import { toast, Toaster } from 'sonner';
import { ChatProvider } from './stores/ChatProvider';

function AppContent() {
  const { showModal, setShowModal } = useRefreshModal();

  useEffect(() => {
    toast.info('Hai selamat datang di InfoQA', {
      description: 'Sistem Panduan Teknik Informatika 2024',
    });
  }, []);

  return (
    <LayoutDefault>
      <Toaster position='top-center' theme='dark' />
      <Sidebar />
      <About />
      <Chat />
      <Modal open={showModal} onOpenChange={setShowModal} content={<NewChat />} />
    </LayoutDefault>
  );
}

function App() {
  return (
    <ChatProvider>
      <AppContent />
    </ChatProvider>
  );
}

export default App;
