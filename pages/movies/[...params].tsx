import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Seo from "../../components/Seo";

export default function Detail({
  title,
  movie,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  return (
    <div className="movie">
      <Seo titleName={title} />
      {movie?.poster_path && (
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
      )}
      <h2>{title}</h2>
      <h4>{movie?.vote_average && `평점 : ${movie?.vote_average}`}</h4>
      <span>{movie?.overview}</span>
      <style jsx>{`
        img {
          width: 520px;
          height: 700px;
        }
      `}</style>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const [title, movieId] = params?.params as string[];
  const movie: IMovieProps = await (
    await fetch(`http://localhost:3000/api/movies/${movieId}`)
  ).json();

  return {
    props: {
      title,
      movie,
    },
  };
};

interface IGenresProps {
  id: number;
  name: string;
}

interface IProductionCompany {
  id: number;
  logo_path?: string;
  name: string;
  origin_country: string;
}

interface ISpokenLanguage {
  iso_639_1: string;
  name: string;
}

interface IMovieProps {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: Object;
  budget: number;
  genres: IGenresProps[];
  homepage?: string;
  id: number;
  imdb_id?: string;
  original_language: string;
  original_title: string;
  overview?: string;
  popularity: number;
  poster_path?: string;
  production_companies: IProductionCompany[];
  release_date: string;
  revenue: number;
  runtime?: number;
  spoken_languages: ISpokenLanguage[];
  status: string;
  tagline?: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
