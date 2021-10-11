import {Dimensions, StyleSheet} from 'react-native';

const ScreenListStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  header: {
    marginTop: 72,
    marginBottom: 30,
    marginLeft: 32,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  scrollView: {
    paddingHorizontal: 32,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
});

export {ScreenListStyles};
