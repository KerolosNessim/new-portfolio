import { locations } from "#constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const DEFULT_LOCATION = locations.work;

const useLocationStore = create(
  immer((set) => ({
    activeLocation: DEFULT_LOCATION,

    setActiveLocation: (location = null) =>
      set((state) => {
        state.activeLocation = location;
      }),

    resetLocation: () =>
      set((state) => {
        state.activeLocation = DEFULT_LOCATION;
      }),
  }))
);
export default useLocationStore;
