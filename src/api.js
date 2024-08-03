export const getList = async () => {
  const res = await fetch("https://wedev-api.sky.pro/api/leaderboard", {
    method: "GET",
  });
  const data = await res.json();
  return data;
};

export const postList = async ({id, name, time}) => {
  const res = await fetch("https://wedev-api.sky.pro/api/leaderboard", {
    method: "POST",
    body: JSON.stringify({
      id,
      name,
      time,
    })
  });
  const data = await res.json();
  return data;
};
