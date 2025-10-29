import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 menit: cukup singkat, karena chat atau panduan bisa update
      gcTime: 5 * 60 * 1000, // hapus dari cache setelah 5 menit tidak dipakai
      refetchOnWindowFocus: false, // biar gak nge-refetch terus pas ganti tab
      refetchOnReconnect: true, // refetch kalau koneksi balik lagi
      retry: (failureCount, error) => {
        // Jangan retry kalau error 4xx
        if (error?.message?.includes('404') || error?.message?.includes('400')) {
          return false;
        }
        return failureCount < 2; // cukup 2x retry, biar gak terlalu lama di chat
      },
    },
    mutations: {
      retry: 0, // mutation (misal kirim pesan) sebaiknya tidak di-retry otomatis
      onError: (error) => {
        console.error('Mutation error:', error);
        alert('Terjadi kesalahan saat mengirim data.');
      },
    },
  },
});
