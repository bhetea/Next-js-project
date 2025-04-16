async function getQuote() {
  try {
    const res = await fetch('https://api.quotable.io/random', {
      cache: 'no-store',
    });
    
    if (!res.ok) throw new Error('Failed to fetch quote');
    
    const data = await res.json();
    return {
      q: data.content,
      a: data.author
    };
  } catch (error) {
    console.error('Error fetching quote:', error);
    return {
      q: "The only true wisdom is in knowing you know nothing.",
      a: "Socrates"
    };
  }
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
