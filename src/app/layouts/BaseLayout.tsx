import Header from '@/widgets/header/ui/Header/Header';
import { Outlet } from 'react-router-dom';

function BaseLayout() {
  return (
    <div>
      <div className="container">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default BaseLayout;
