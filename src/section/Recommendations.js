import Link from "next/link";
import { useEffect, useState } from "react";
import { getAnimeRecommendations } from "../action";
import { MainCard } from "../components";
import { For, RenderIfFalse, RenderIfTrue } from "../utils";

const Recommendations = () => {
  const [anime, setAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const res = await getAnimeRecommendations();

    if (res.status === 200) {
      if (res.data.success !== false) {
        setAnime(res.data);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <RenderIfTrue isTrue={isLoading}>
        <div className="container">
          <p className="text-base font-medium">Mengambil data rekomendasi...</p>
        </div>
      </RenderIfTrue>
      <RenderIfFalse isFalse={isLoading}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4">
            <For
              each={anime}
              render={(data, index) => (
                <div
                  className="w-full grid grid-cols-3 gap-3 pt-4 group"
                  key={index}
                >
                  <div>
                    <MainCard
                      path={`/details/${data?.link?.endpoint}`}
                      image={data?.link?.thumbnail}
                    />
                  </div>
                  <div className="col-span-2 py-2">
                    <Link href={`/details/${data?.link?.endpoint}`} passHref>
                      <a className="text-lg font-medium group-hover:text-pink-500 transition-colors duration-300">
                        {data?.title}
                      </a>
                    </Link>
                  </div>
                </div>
              )}
            />
          </div>
        </div>
      </RenderIfFalse>
    </>
  );
};

export default Recommendations;
