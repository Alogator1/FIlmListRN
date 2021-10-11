import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const VerticalCardStyles = StyleSheet.create({
  wrapper: {
    height: 170,
    width: Dimensions.get('window').width - 48,
    marginRight: 24,
    marginBottom: 16,
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  footer: {
    backgroundColor: 'rgba(255, 255, 255, 0.89)',
    paddingVertical: 14,
    paddingHorizontal: 12,
  },
});

export {VerticalCardStyles};
