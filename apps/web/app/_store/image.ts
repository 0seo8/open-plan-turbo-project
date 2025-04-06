import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ImageData {
  id: number | string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

interface ImageState {
  photoData: ImageData | null;
  isLoading: boolean;
  error: string | null;
  hasViewedImage: boolean;

  setPhotoData: (data: ImageData) => void;
  clearPhotoData: () => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useImageStore = create<ImageState>()(
  persist(
    set => ({
      photoData: null,
      isLoading: false,
      error: null,
      hasViewedImage: false,

      setPhotoData: data => set({ photoData: data, hasViewedImage: true, error: null }),
      clearPhotoData: () => set({ photoData: null, hasViewedImage: false, error: null }),
      setLoading: isLoading => set({ isLoading }),
      setError: error => set({ error, isLoading: false }),
    }),
    {
      name: 'photo-storage',
      partialize: state => ({
        photoData: state.photoData,
        hasViewedImage: state.hasViewedImage,
        isLoading: state.isLoading,
        error: state.error,
      }),
    },
  ),
);
