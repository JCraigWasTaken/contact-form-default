const getHealth = async () => {
  try {
    const response = await fetch(
      "https://interview-api-carboncure.herokuapp.com/health/APIKEY"
    );
    const returnVal = await response.json();
    console.log(returnVal);
  } catch (error) {
    console.log(error);
  }
};

const postUsers = async (usersData) => {
  try {
    const response = await fetch(
      "https://interview-api-carboncure.herokuapp.com/users/APIKEY",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usersData),
      }
    );
    const returnVal = await response.json();
    console.log(returnVal);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getHealth,
  postUsers,
};
