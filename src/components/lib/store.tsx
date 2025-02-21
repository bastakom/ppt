import { create } from "zustand";
type Filter = {
  title: string;
  _uid: string;
};

interface IsOpenMenu {
  open: string;
  setOpen: (value: string) => void;
  openDropdown: boolean;
  setOpenDropdown: (value: boolean) => void;
  isProgramDropdownOpen: boolean;
  setProgramDropdownOpen: (value: boolean) => void;
  filter: Filter;
  setFilter: (value: Filter) => void;
  openCalender: boolean;
  setOpenCalender: (value: boolean) => void;
  filterId: string;
  setFilterId: (value: string) => void;
}

const useStore = create<IsOpenMenu>((set) => ({
  open: "",
  setOpen: (value) => set({ open: value }),
  openDropdown: false,
  setOpenDropdown: (value) => set({ openDropdown: value }),
  isProgramDropdownOpen: false,
  setProgramDropdownOpen: (value) => set({ isProgramDropdownOpen: value }),
  filter: { title: "", _uid: "" },
  setFilter: (value) => set({ filter: value }),
  openCalender: false,
  setOpenCalender: (value) => set({ openCalender: value }),
  filterId: "",
  setFilterId: (value) => set({ filterId: value }),
}));

export default useStore;
