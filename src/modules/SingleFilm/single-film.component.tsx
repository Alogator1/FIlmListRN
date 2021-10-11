import React, {useEffect, useRef} from 'react';
import {
  BackHandler,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {openFilm, loadSimilar} from '../../store/screensSlice';
import {Film} from '../../models/films';
import {SingleFilmStyles} from './single-film.style';
import VerticalCard from '../../components/VerticalCard/vertical-card';

type SingleFilmProps = {
  film: Film;
};

const SingleFilm: React.FC<SingleFilmProps> = ({film}) => {
  const dispatch = useDispatch();

  const {similar, openedFilm}: {similar: Film[]; openedFilm: Film} =
    useSelector(store => store.film);

  const scrollRef = useRef<ScrollView>(null);
  const textScrollRef = useRef<ScrollView>(null);
  const similarScrollRef = useRef<FlatList>(null);

  useEffect(() => {
    const backAction = BackHandler.addEventListener('hardwareBackPress', () => {
      dispatch(openFilm(null));

      return true;
    });

    fetch(
      `https://api.themoviedb.org/3/movie/${film.id}/similar?api_key=e8ae59d95e445da13e5a518624ac0972&language=en-US&page=1`,
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        dispatch(loadSimilar(data.results));
      });

    return () => {
      backAction.remove();
    };
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${film.id}/similar?api_key=e8ae59d95e445da13e5a518624ac0972&language=en-US&page=1`,
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        dispatch(loadSimilar(data.results));
      });

    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });

    textScrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });

    similarScrollRef.current?.scrollToOffset({
      offset: 0,
      animated: true,
    });
  }, [openedFilm]);

  return (
    <ScrollView
      style={{flex: 1, minHeight: Dimensions.get('window').height}}
      nestedScrollEnabled={true}
      ref={scrollRef}>
      <Image
        style={{height: 240}}
        source={{
          uri: film.backdrop_path
            ? `https://image.tmdb.org/t/p/original${film?.backdrop_path}`
            : 'https://i.ytimg.com/vi/317jz-PU7Mg/maxresdefault.jpg',
        }}
      />

      <View style={SingleFilmStyles.mainWrapper}>
        <View style={SingleFilmStyles.ratingCircle}>
          <Text style={SingleFilmStyles.ratingText}>
            {film?.vote_average * 10 + '%'}
          </Text>
        </View>

        <View style={SingleFilmStyles.header}>
          <Text style={SingleFilmStyles.date}>
            {film?.release_date?.split('-')[0]}
          </Text>

          <Text style={SingleFilmStyles.title}>{film?.title}</Text>
        </View>

        <Text style={SingleFilmStyles.h2}>OVERVIEW:</Text>

        <ScrollView
          style={SingleFilmStyles.overviewWrapper}
          nestedScrollEnabled={true}
          ref={textScrollRef}>
          <Text style={SingleFilmStyles.overview}>{film.overview}</Text>
        </ScrollView>

        <Text style={SingleFilmStyles.h2}>SIMILAR MOVIES:</Text>
        <FlatList
          style={{marginBottom: 50}}
          data={similar}
          horizontal
          ref={similarScrollRef}
          renderItem={({item}) => <VerticalCard film={item} />}
        />
      </View>
    </ScrollView>
  );
};

export default SingleFilm;
