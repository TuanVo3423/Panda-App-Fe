import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// app navigation
export type AppStackParamList = {
  Root: undefined;
  Auth: undefined;
  Modal: undefined;
  Notifications: undefined;
  Activity: undefined;
  Profile: undefined;
  MyProfile: undefined;
  TeacherProfile: undefined;
  FormPost: { tab_topic: number };
  PreviewCaptureResult: { data: any };
  PreviewComment: { post_id: any };
};

// app props types
export type AppStackScreenProps<Screen extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, Screen>;

// root tab navigation
export type RootTabParamList = {
  Home: undefined;
  Explore: undefined;
  Capture: undefined;
  Community: undefined;
  Menu: undefined;
};

// root tab props types
export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<AppStackParamList>
  >;

export type AuthStackParamList = {
  Login: undefined;
};

// app props types
export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<AuthStackParamList, Screen>,
    NativeStackScreenProps<AppStackParamList>
  >;
