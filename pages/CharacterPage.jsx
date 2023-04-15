import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../src/utils/http";
import { Card } from "../src/components/Card/Card";

const API = import.meta.env.VITE_API;

export const CharacterPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const getData = async (id) => {
      const char = await get(`${API}/character/${id}`);
      setCharacter(char);
    };
    getData(id);
  }, [id]);
  return (
    <div className="container text-center mt-5">
      <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        <div className="col">
          <img style={{width: "18rem"}} src={character.image} alt="" />
        </div>
        <div className="col ms-5">
          <div className="p-3" style={{color: "red"}}>Row column</div>
        </div>
      </div>
    </div>
  );
};
