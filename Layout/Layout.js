import '../Layout/layout.css';
import MenuLayout from './MenuLayout';

const Layout = ({children}) => (
    <div className="bodyMain">
        <MenuLayout />
        {children}
    </div>
)
export default Layout;