export default function UserId({ params }) {
  return (
    <div>
      <h3>User Profile</h3>
      <p>User ID: {params.id}</p>
    </div>
  );
}
