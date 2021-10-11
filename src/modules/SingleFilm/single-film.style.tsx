import {StyleSheet} from 'react-native';

const SingleFilmStyles = StyleSheet.create({
  ratingCircle: {
    height: 80,
    width: 80,
    top: -40,
    right: 6,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: 40,
    backgroundColor: 'rgba(72, 72, 72, 1)',
    position: 'absolute',
  },
  ratingText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  mainWrapper: {
    paddingTop: 16,
    paddingHorizontal: 24,
    position: 'relative',
    backgroundColor: 'rgb(28, 28, 28)',
  },
  header: {
    marginBottom: 30,
  },
  date: {
    marginBottom: 6,
    fontSize: 18,
    color: 'white',
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  h2: {
    marginBottom: 30,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  overview: {
    fontSize: 18,
    color: 'white',
  },
  overviewWrapper: {
    maxHeight: 200,
    marginBottom: 30,
  },
});

export {SingleFilmStyles};
