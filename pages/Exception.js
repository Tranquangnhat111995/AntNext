import { Table, Tag } from 'antd';
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
        
      title: 'Reason',
      dataIndex: 'Reason',
      key: 'Reason',
      width: '20%',
    },
    {
        
      title: 'Priority',
      dataIndex: 'Priority',
      key: 'Priority',
      width:'42%',
    },
    {
        title: '',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
          <span>
            {tags.map(tag => {
              let color = 'blue';
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        ),
      },
  ];

  const data = [
    {
      key: 1,
      p:<p></p>,
      BamID: 'Barn 1',
      Reason: 'high weekly increase',
      Priority: 'i',
      tags: ['Notify Staff']
    },
    {
      key: 2,
      p:<p></p>,
      BamID: 'Barn 2',
      Reason: 'tank at capacity',
      Priority: 'iii',
      tags: ['Notify Staff']
    },
    {
      key: 3,
      p:<p></p>,
      BamID: 'Barn 3',
      Reason: 'high weekly increase',
      Priority: 'i',
      tags: ['Notify Staff']
    },
    {
      key: 4,
      p:<p></p>,
      BamID: 'Barn 4',
      Reason: 'high weekly increase',
      Priority: 'i',
      tags: ['Notify Staff']
    },
  ];
  

class Exception extends React.Component{
    render(){
        return(
            <div className="tableException">
                <h1>Exception Reports</h1>
                <Table columns={columns} dataSource={data} />
            </div>
        );
    }
}

export default Exception;