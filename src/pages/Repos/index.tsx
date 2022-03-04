import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

export type Repository = {
  full_name: string;
  description: string;
};
function Repos() {
  const { data, isFetching } = useQuery<Repository[]>("repos", async () => {
    const response = await axios.get(
      "https://api.github.com/users/Math2121/repos"
    );

    return response.data;
  },{
    staleTime: 1000 * 60 // 1 minuto
  });
  return (
    <div className="App">
      <ul>
        {isFetching ?? <p>Carregando...</p>}
        {data?.map((repo) => (
          <li key={repo.full_name}>
            <Link to={`/repo/${repo.full_name}`}>
              <li>{repo.full_name}</li>
            </Link>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Repos;
