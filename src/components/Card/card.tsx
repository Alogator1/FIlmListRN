import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Film} from '../../models/films';
import {openFilm} from '../../store/screensSlice';
import {CardStyles} from './card.style';

type CardProps = {
  film: Film;
};

const Card: React.FC<CardProps> = ({film}) => {
  const dispatch = useDispatch();

  const setOpenedFilm = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${film?.id}?api_key=e8ae59d95e445da13e5a518624ac0972&language=en-US`,
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        dispatch(openFilm(data));
      });
  };
  return (
    <View onTouchEnd={setOpenedFilm}>
      <ImageBackground
        style={CardStyles.wrapper}
        source={{
          uri: film.backdrop_path
            ? `https://image.tmdb.org/t/p/original${film?.backdrop_path}`
            : 'https://i.ytimg.com/vi/317jz-PU7Mg/maxresdefault.jpg',
        }}>
        <View style={CardStyles.footer}>
          <Text style={CardStyles.title}>{film.title}</Text>
          <Text style={CardStyles.year}>
            {film.release_date?.split('-')[0]}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Card;
