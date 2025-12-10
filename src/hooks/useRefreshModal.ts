import { useEffect, useState } from 'react';

export default function useRefreshModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Detect refresh: cek apakah ada navigation entry dengan type reload
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;

    if (navigationEntry && navigationEntry.type === 'reload') {
      // Page di-refresh, tampilkan modal
      setShowModal(true);
    }
  }, []);

  const closeModal = () => setShowModal(false);

  return {
    showModal,
    closeModal,
    setShowModal,
  };
}
