import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Profile from '../Components/Profile';
import SidebarComponent from '../Components/Sidebar';

function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="flex  flex-col md:flex-row min-h-screen">
      <div className='w-full md:w-56'>
        {/* sidebar */}
        <SidebarComponent />
      </div>
 
        {tab === 'profile' && <Profile />}

    </div>
  )
}

export default Dashboard
