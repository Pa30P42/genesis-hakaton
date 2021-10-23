const baseUrl = 'https://api.themoviedb.org/';

export default async function getMovies(
  page,
  perPage,
  clientAddress,
  tokenName,
) {
  try {
    const res = await fetch(
      `${baseUrl}/transaction?page=${page}&perPage=${perPage}${currencyQueryParam}&clientAddress=${clientAddress}&time=${new Date().getTime()}`,
      { headers: { 'Cache-Control': 'no-store, max-age=0' } },
    );
    const transactions = await res.json();

    return transactions;
  } catch (error) {
    console.error(error);
  }
}
