import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

const Home = ({ movies }: InferGetServerSidePropsType<GetServerSideProps>) => {
  const router = useRouter();
  const onClick = ({ movieId, title }: { movieId: number; title: string }) => {
    router.push(`/movies/${title}/${movieId}`);
  };

  return (
    <div className="container">
      {movies.map((movie: IMovieProps) => (
        <div
          className="movie"
          key={movie.id}
          onClick={() => onClick({ movieId: movie.id, title: movie.title })}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>{movie.title}</h4>
        </div>
      ))}
      <style jsx global>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export const getServerSideProps = async () => {
  const { results } = await (
    await fetch("http://localhost:3000/api/movies")
  ).json();
  return {
    props: {
      movies: results,
    },
  };
};

interface IMovieProps {
  poster_path?: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: [number];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path?: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export default Home;
