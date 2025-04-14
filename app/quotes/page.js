// app/quotes/page.js

async function getQuote() {
  const res = await fetch('https://zenquotes.io/api/random', {
    cache: 'no-store', // so it fetches fresh on every request
  });
  const data = await res.json();
  return data[0];
}

export default async function QuotesPage() {
  const quote = await getQuote();

  return (
    <main className="p-10 text-center">
      <h1 className="text-2xl font-bold">🌟 Daily Motivation</h1>
      <p className="mt-6 italic text-lg">"{quote.q}"</p>
      <p className="mt-2 font-semibold">- {quote.a}</p>
    </main>
  );
}
