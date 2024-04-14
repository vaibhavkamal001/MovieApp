export const AddWatchList = (watchList) => {
  console.log(watchList);
  return async (dispatch) => {
    const user = localStorage.getItem("user");
    const url = `https://authentication-f405e-default-rtdb.firebaseio.com/watchlist.json`;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: watchList,
      }),
    };

    const fetchData = async () => {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Could not fetch cart data");
      }
      const data = await response.json();
      return data;
    };
    try {
      await fetchData();
    } catch (error) {
      console.log(error);
    }
  };
};
