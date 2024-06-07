import Counter from "./_components/Counter";

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return (
    <>
      <h1>The wild Oasis. Welcome to paradise.</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}> {user.name}</li>
        ))}
      </ul>

      <Counter users={data}></Counter>
    </>
  );
}
