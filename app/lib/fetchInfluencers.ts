export const fetchInfluencers = async () => {
  const data = await fetch('http://localhost:3000/api/influencers');

  return data.json();
};
