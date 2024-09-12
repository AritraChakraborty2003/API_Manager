const generalGet = (req, res) => {
  const myObj = {
    name: "Aritra",
    age: 21,
    city: "Noida",
  };

  res.send(myObj);
};

export { generalGet };
