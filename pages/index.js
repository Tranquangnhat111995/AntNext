import Link from 'next/link'
import Layout from '../Layout/Layout';
import Sidebar from '../pages/Sidebar';
import Pitlevels from './Pitlevels';
import Exception from './Exception';
class Home extends React.Component{
    render(){
        return(
            <Layout>
                <div className="content">
                    <Sidebar />
                    <div className="contentArea">
                        <Pitlevels />
                        <Exception />
                    </div>
                </div>
                {/* <Link href="/about"><a>Quay lại</a></Link>
                <h1>Đây là trang chủ</h1> */}
            </Layout>
        );
    }
}
export default Home;