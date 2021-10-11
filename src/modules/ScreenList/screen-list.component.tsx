import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import Card from '../../components/Card/card';
import {ScreenListStyles} from './screen-list.style';
import {useDispatch, useSelector} from 'react-redux';
import {loadFilms} from '../../store/screensSlice';
import {Film} from '../../models/films';
import SingleFilm from '../SingleFilm/single-film.component';

const getFilmsUrl =
  'https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=e8ae59d95e445da13e5a518624ac0972';

const ScreenList: React.FC = () => {
  const dispatch = useDispatch();
  const {films, openedFilm}: {films: Film[]; openedFilm: Film} = useSelector(
    store => store.film,
  );

  useEffect(() => {
    films?.length < 1 &&
      fetch(getFilmsUrl)
        .then(response => {
          return response.json();
        })
        .then(data => {
          dispatch(loadFilms(data.results));
        });
  }, []);

  return openedFilm?.id ? (
    <SingleFilm film={openedFilm} />
  ) : (
    <SafeAreaView style={ScreenListStyles.wrapper}>
      <View>
        <Text style={ScreenListStyles.header}>MOVIES</Text>
      </View>
      {films?.length > 0 && (
        <FlatList
          style={ScreenListStyles.scrollView}
          data={films}
          numColumns={2}
          renderItem={({item}) => <Card film={item} />}
        />
      )}
    </SafeAreaView>
  );
};

export default ScreenList;
