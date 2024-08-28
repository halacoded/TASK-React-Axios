import instance from ".";
// 3. Create a function for each endpoint
//     - one for getting all the pets
//     - one for getting one pet by ID
// 4. Don’t forget to export your endpoints.

const getAllPets = async () => {
  const response = await instance.get("pets/");
  return response.data;
};

export { getAllPets };

const getPetById = async (id) => {
  const response = await instance.get(`pets/${id}`);
  return response.data;
};
export { getPetById };

const creatNewPet = async (name, image, type, adopted) => {
  const response = await instance.post("pets/", {
    name: name,
    image: image,
    type: type,
    adopted: adopted,
  });
  return response.data;
};
export { creatNewPet };

const deletePetById = async (id) => {
  const response = await instance.delete(`pets/${id}`);
  return response.data;
};

export { deletePetById };
