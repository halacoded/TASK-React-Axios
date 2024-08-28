import { getPetById } from "../API/pets";
import React from "react";
// import { deletePetById } from "../API/pets";
import { useParams } from "react-router";
import { useQuery } from "react-query";
const PetDetail = () => {
  //the comments used to show pet by clicking on button before lerning query
  // const [pet, setPet] = useState({});

  const { id } = useParams();
  const { data: pet } = useQuery({
    queryKey: ["getPetById"],
    queryFn: () => getPetById(id),
  });

  //
  // const getpet = async () => {
  //   const res = await getPetById(id);
  //   setPet(res);
  //   console.log(res);
  // };
  // const Handelpet = (e) => {
  //   setId(e.target.value);
  //   console.log(id);
  // };
  // const HandelDelete = async () => {
  //   const res = await deletePetById(id);
  // };
  return (
    <div className="bg-[#F9E3BE] w-screen h-[100vh] flex justify-center items-center">
      <div className="border border-black rounded-md w-[70%] h-[70%] overflow-hidden flex flex-col md:flex-row p-5">
        <div className="h-full w-full md:w-[35%]">
          <img
            src={pet?.image}
            alt={pet?.name}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="w-full md:w-[65%] h-full pt-[30px] flex flex-col p-3">
          <h1>Name: {pet?.name}</h1>
          <h1>Type: {pet?.type}</h1>
          <h1>adopted: {pet?.adopted}</h1>

          <button className="w-[70px] border border-black rounded-md  hover:bg-green-400 mb-5">
            Adobt
          </button>

          <button
            className="w-[70px] border border-black rounded-md  hover:bg-red-400"
            // onClick={HandelDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetDetail;
