import { Platform, StyleSheet } from 'react-native';
import { colors } from './colors';

export const typography = StyleSheet.create({
  h1: {
    fontSize: 28,
  },
  h2: {
    fontSize: 22,
    color: colors.primaryBlack,
    fontFamily: 'Inter_600SemiBold',
  },
  h3: {
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
  },
  // loginbutton:{
  //   height: 56,
  //   width:"100%",
  //   flexDirection:'row' ,
  //   justifyContent:'center',
  //   alignItems:'center'

  //   // h-14 rounded-xl w-full bg-white flex-row items-center justify-center
  // },
  paragraph: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: colors.secondary,
    marginTop: 8,
  },
  titleClean: {
    fontSize: 32,
    fontFamily: 'Inter_700Bold',
    color: colors.white,
    textAlign: 'center',
  },
  subTitleClean: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: colors.white,
    textAlign: 'center',
    marginTop: 8,
  },
});

export const formStyles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    paddingHorizontal: 16,
    marginBottom: 8,
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: colors.primaryBlack,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
  labelClean: {
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
    color: colors.white,
  },
  inputClean: {
    width: '100%',
    height: 30,
    paddingHorizontal: 16,
    marginBottom: 8,
    fontFamily: 'Inter_400Regular',
    fontSize: 18,
    color: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
  },
  compactInputWrapper: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 16,
    shadowColor: '#000000',
    marginBottom: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.0,
    elevation: 1,
  },
  compactInput: {
    width: '100%',
    marginLeft: 12,
  },
});

export const deviceSafeAreaDetection = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? 32 : 0,
  },
});

export const headerStyles = StyleSheet.create({
  style: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#BEBEBE',
  },
});
