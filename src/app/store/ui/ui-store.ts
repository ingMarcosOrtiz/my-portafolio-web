import { create } from 'zustand'

interface State {
  isSideMenuOpen: boolean
  openSideMenu: () => void
  closeSideMenu: () => void
}

interface StateMenuCategories {
  isOpenCategoryMenu: boolean
  setIsOpenCategoryMenu: () => void
  setIsCloseCategoryMenu: () => void
}
// const [isactive, setIsactive] = useState();

export const useUIStore = create<State>()((set) => ({
  isSideMenuOpen: false,
  openSideMenu: () => set({ isSideMenuOpen: true }),
  closeSideMenu: () => set({ isSideMenuOpen: false }),
}))

export const useOpenCategoryStore = create<StateMenuCategories>()((set) => ({
  isOpenCategoryMenu: false,
  setIsOpenCategoryMenu: () => set({ isOpenCategoryMenu: true }),
  setIsCloseCategoryMenu: () => set({ isOpenCategoryMenu: false }),
}))
