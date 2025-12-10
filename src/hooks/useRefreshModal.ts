import { useEffect, useState } from 'react';

export default function useRefreshModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isRefreshShortcut = e.key === 'F5' || ((e.ctrlKey || e.metaKey) && e.key === 'r');

      if (isRefreshShortcut) {
        e.preventDefault();
        setShowModal(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const closeModal = () => setShowModal(false);

  return {
    showModal,
    closeModal,
    setShowModal,
  };
}
