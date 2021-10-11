/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, ImageBackground, Text, View} from 'react-native';
import { useDispatch } from 'react-redux';
import { Film } from '../../models/films';
import { openFilm } from '../../store/screensSlice';
import {VerticalCardStyles} from './vertical-card.style';

type VerticalCardProps = {
    film: Film;
}

const VerticalCard: React.FC<VerticalCardProps> = ({film}) => {
    const dispatch = useDispatch();

    const setOpenedFilm = () => {
        fetch(`https://api.themoviedb.org/3/movie/${film?.id}?api_key=e8ae59d95e445da13e5a518624ac0972&language=en-US`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          dispatch(openFilm(data));
        });
    };
  return (
      <View onTouchEnd={setOpenedFilm}>
        <Image style={VerticalCardStyles.wrapper} source={{uri: film.backdrop_path ? `https://image.tmdb.org/t/p/original${film?.backdrop_path}` : 'https://i.ytimg.com/vi/317jz-PU7Mg/maxresdefault.jpg'}} />

        <Text style={VerticalCardStyles.title}>{film.title}</Text>
    </View>
  );
};

export default VerticalCard;
