import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

export const SidebarData = [    
    {
        title: 'Home',
        icon:<HomeIcon/>,
        path:"/pages/home"
    },
    {
        title: 'Employee',
        icon:<MiscellaneousServicesIcon/>,
        path:"/pages/employee"
    },
    {
        title: 'About',
        icon:<InfoIcon/>,
        path:"/pages/about"
    }
]