import useAuthenticatedStore from '@stores/useAuthenticatedStore';
export function useAuth() {
  const { UserProfile, setUserProfile } = useAuthenticatedStore();

  return {
    UserProfile,
    setUserProfile,
  };
}
