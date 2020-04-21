import Link from 'next/link'
import { Select,Checkbox } from 'antd';

const { Option } = Select;
class Sidebar extends React.Component{
    render(){
        return(
            <div className="sidebar">
                <h1>Area Manager View</h1>
                <div className="barns">
                    <p>Barn Filter</p>
                    <Select
                        showSearch
                        placeholder="All Barns"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Barn1</Option>
                        <Option value="lucy">Barn2</Option>
                        <Option value="tom">Barn3</Option>
                    </Select>
                </div>
                <div className="checkbox">
                        <div className="allBams">
                            <Checkbox defaultChecked
                            >All Barns</Checkbox> 
                        </div>
                        <div className="bam1">
                            <Checkbox defaultChecked
                            >Barn 1</Checkbox>
                        </div>
                        <div className="bam2">
                            <Checkbox defaultChecked
                            >Barn 2</Checkbox>
                        </div>
                </div>
            </div>
            // <Layout>
            //     <Link href="/"><a>Trang chủ</a></Link>
            //     <User />
            // </Layout>
        );
    }
}
export default Sidebar;