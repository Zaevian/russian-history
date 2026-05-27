import { create } from 'zustand';

interface ReaderState {
  mode: 'light' | 'sepia' | 'dark';
  setMode: (mode: 'light' | 'sepia' | 'dark') => void;
  reducedMotion: boolean;
  setReducedMotion: (value: boolean) => void;
}

export const useReaderStore = create<ReaderState>((set) => ({
  mode: 'light',
  setMode: (mode) => set({ mode }),
  reducedMotion: false,
  setReducedMotion: (value) => set({ reducedMotion: value }),
}));
