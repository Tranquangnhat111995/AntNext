import { Menu } from 'antd';
const { SubMenu } = Menu;
import {MenuOutlined} from '@ant-design/icons';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
class MenuLayout extends React.Component{
    state={
        display:false
    }
    toggleHandler () {
        this.setState({
            display: !this.state.display
        })
    }
    render(){
        let content = null;
        return(
        <div className="header">
            <MenuOutlined onClick={()=>this.toggleHandler()} />
            <div className="logo">SENTINEL</div>
            {
                this.state.display?
                <div className="menu1">
                <Menu >
                    <SubMenu
                    key="sub1"
                    mode="inline"
                    title={
                        <span><b>Pit Level</b></span>
                    }
                    >
                    </SubMenu>
                </Menu>
                <Menu >
                    <SubMenu
                    key="sub2"
                    mode="inline"
                    title={
                        <span>Manage Users</span>
                    }
                    >
                    </SubMenu>
                </Menu>
                <Menu >
                    <SubMenu
                    key="sub3"
                    mode="inline"
                    title={
                        <span>Manage Barns</span>
                    }
                    >
                    </SubMenu>
                </Menu>
                <Menu >
                    <SubMenu
                    key="sub4"
                    mode="inline"
                    title={
                        <span>Alerts</span>
                    }
                    >
                    </SubMenu>
                </Menu>
            </div>
                :null
            }
            <div className="menu">
                <Menu >
                    <SubMenu
                    key="sub1"
                    mode="inline"
                    title={
                        <span><b>Pit Level</b></span>
                    }
                    >
                    </SubMenu>
                </Menu>
                <Menu >
                    <SubMenu
                    key="sub2"
                    mode="inline"
                    title={
                        <span>Manage Users</span>
                    }
                    >
                    </SubMenu>
                </Menu>
                <Menu >
                    <SubMenu
                    key="sub3"
                    mode="inline"
                    title={
                        <span>Manage Barns</span>
                    }
                    >
                    </SubMenu>
                </Menu>
                <Menu >
                    <SubMenu
                    key="sub4"
                    mode="inline"
                    title={
                        <span>Alerts</span>
                    }
                    >
                    </SubMenu>
                </Menu>
            </div>
            <div className="img">
                    <span>Hello Thomas</span>
                    <img src="https://cdn.pose.com.vn/legacy/images/baiviet/201608/scrape_14716156914409_2016-08-17-18-45-19-1471582814396.png"/>
            </div>
    </div>
        );
    }
}
export default MenuLayout;