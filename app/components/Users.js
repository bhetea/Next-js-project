import Link from "next/link";

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Betty" },
  { id: 4, name: "Mike" },
  { id: 5, name: "Aliya" },
];

export default function UsersPage() {
  return (
    <div>
      <h3>Users List</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <span>{user.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
