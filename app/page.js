import Link from 'next/link';
import Users from './components/Users';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Users />
    </div>
  );
}
