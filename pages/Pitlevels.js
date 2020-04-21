import { Button } from 'antd';
import { Table } from 'antd';
import Document, { Head, Main, NextScript } from 'next/document';
const columns = [
    {
        title:'',
        dataIndex:'p',
        key:'p',
    },
    {
        
      title: 'Barn ID',
      dataIndex: 'BamID',
      key: 'BamID',
      width:'20%'
    },
    {
        
      title: 'Pit Level',
      dataIndex: 'PitLevel',
      key: 'PitLevel',
      width: '20%',
    },
    {
        
      title: 'Increase vs.prior week',
      dataIndex: 'Increasevspriorweek',
      key: 'Increasevspriorweek',
    },
  ];

  const data = [
    {
      key: 1,
      p:<p className="bam1"></p>,
      BamID: 'Barn 1',
      PitLevel: '42 in',
      Increasevspriorweek: '1.1 in',
    },
    {
      key: 2,
      p:<p className="bam2"></p>,
      BamID: 'Barn 2',
      PitLevel: '38 in',
      Increasevspriorweek: '0.9 in',
    },
    {
      key: 3,
      p:<p className="bam1"></p>,
      BamID: 'Barn 3',
      PitLevel: '55 in',
      Increasevspriorweek: '3.9 in',
    },
    {
      key: 4,
      p:<p className="bam3"></p>,
      BamID: 'Barn 4',
      PitLevel: '39 in',
      Increasevspriorweek: '1.4 in',
    },
  ];
      
  
class Pitlevels extends React.Component{
    render(){
        return(
          <div >
                <div className="pitLevels">
                    <h1>Pit Levels</h1>
                    <div className="bottomStatus">
                        <p>Filter by status</p>
                        <Button type="primary">danger</Button>
                        <Button type="primary" danger>waming</Button>
                        <Button type="omitted" >normal</Button>
                    </div>
                </div>
                <div className="table">
                <Table columns={columns} dataSource={data} />,
                </div>
          </div>
        );
    }
}
export default Pitlevels;