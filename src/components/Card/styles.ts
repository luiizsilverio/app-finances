import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 10,    
    marginHorizontal: 16,
    
  },
  iconContainer: {
    marginBottom: 8,
  },
  title: {
    fontFamily: 'Inter_800ExtraBold',
    fontSize: 20
  },
  subTitle: {
    fontFamily: 'Inter_500Medium',
    fontSize: 12
  }
});

export default styles;
