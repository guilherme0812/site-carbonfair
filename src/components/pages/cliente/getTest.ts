export const revalidate = 0;

export const getTest = async () => {
  const data = await new Promise((resolve) =>
    setTimeout(() => {
      resolve(new Date().toJSON());
    }, 2000)
  ); // Espera dois segundos
  return data;
};
