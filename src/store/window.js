import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useWindowStore = create(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextzIndx: INITIAL_Z_INDEX + 1,
    openWindow: (windowId, data = null) => {
      set((state) => {
        const win = state.windows[windowId];
        if (!win) return;
        win.isOpen = true;
        win.zIndex = state.nextzIndx;
        win.data = data ?? win.data;
        state.nextzIndx++;
      });
    },
    closeWindow: (windowId) => {
      set((state) => {
        const win = state.windows[windowId];
        if (!win) return;
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      });
    },
    focusWindow: (windowId) => {
      set((state) => {
        const win = state.windows[windowId];
        win.zIndex = state.nextzIndx++;
      });
    },
  }))
);

export default useWindowStore;
