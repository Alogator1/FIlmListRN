import {Dimensions, StyleSheet} from 'react-native';

const CardStyles = StyleSheet.create({
  wrapper: {
    height: 200,
    width: 140,
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
    marginRight: Dimensions.get('window').width - 344 ,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  year: {
    fontSize: 12,
    color: 'black',
  },
  footer: {
    backgroundColor: 'rgba(255, 255, 255, 0.89)',
    paddingVertical: 14,
    paddingHorizontal: 12,
  },
});

export {CardStyles};
