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

module.exports = {
  getHealth
};
