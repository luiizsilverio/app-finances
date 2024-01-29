import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    padding: 16,
  },
  menuWrapper: {
    justifyContent: 'center',
    height: '100%',
  },
  userWrapper: {
    justifyContent: 'center',
    height: '100%',    
  },
  userImageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
    height: 44,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#d9d9d9',
    overflow: 'hidden',
  },
  userImage: {
    width: '100%',
    height: '100%',
  }
});

export default styles;