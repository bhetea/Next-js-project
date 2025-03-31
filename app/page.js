import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './components/Users';

export default function Home() {
  return (
    <div className='container-fluid '>
      <h4>Home Page</h4>
      <Users />
    </div>
  );
}
