import React, { Component } from 'react';
import axios from 'axios'
import Spinner from '../../components/Spinner'
import PropTypes from 'prop-types';

import './movie.css'

// https://api.themoviedb.org/3/movie/ID?KEY
//alternative_titles,changes,credits,images,keywords,lists,releases,reviews,similar,translations,videos

const url = 'https://api.themoviedb.org/3'
const key = 'api_key=733712954fe242fa22a31638b23362b9'

const img = (path, size = "original") => `http://image.tmdb.org/t/p/${size}${path}`
const getMovie = (field, append) => axios.get(`${url}${field}${key}&append_to_response=${append}`).then(a => a.data)


const ShowMovie = ({ data }) => (
  <div className="movie-wrapper">
    <div className="movie-img">
      <a href={`https://www.themoviedb.org/movie/${data.id}`}>
        <img src={img(data.poster_path, "w500")} className="" alt=""/>
      </a>
    </div>
    <div className="movie-info">
      <h1>{data.original_title}</h1>
      <span>{data.vote_average} ★</span>
      <p>{data.overview}</p>
      <a href={`https://www.themoviedb.org/movie/${data.id}`}>More info</a>
    </div>
  </div>
)

ShowMovie.propTypes = {
  data: PropTypes.object.isRequired,
}

export default class Movie extends Component {
  constructor(){
    super()
    this.state = {
      data: []
    }
  }
  componentDidMount(){
    this.request()
  }
  request(){
    getMovie("/movie/now_playing?" + "&").then(res => this.setState({ data: res.results[0] }))
  }
  render() {
    const { data } = this.state
    return (
      <div>
        {
          data && data.length === 0 ?
          <Spinner /> :
          <ShowMovie data={data} />
        }
      </div>
    )
  }
}
