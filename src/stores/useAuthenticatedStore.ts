import { create } from 'zustand';

interface USer {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  role: string;
  group_id: string;
}
type IAuth = {
  user?: USer;
  token?: string;
};
type UserStoreType = {
  UserProfile: IAuth;
  setUserProfile: (profile: IAuth) => void;
};

const useAuthenticatedStore = create<UserStoreType>((set) => ({
  UserProfile: {},
  setUserProfile: (profile) => set({ UserProfile: profile }),
}));

export default useAuthenticatedStore;
