export const getList = async () => {
  const res = await fetch("https://wedev-api.sky.pro/api/v2/leaderboard", {
    method: "GET",
  });
  const data = await res.json();
  return data;
};

export const postList = async ({id, name, time, achievements}) => {
  const res = await fetch("https://wedev-api.sky.pro/api/v2/leaderboard", {
    method: "POST",
    body: JSON.stringify({
      id,
      name,
      time,
      achievements,
    })
  });
  const data = await res.json();
  return data;
};
