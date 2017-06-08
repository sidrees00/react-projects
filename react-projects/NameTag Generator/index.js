let NameTag = (props) => {
  return (
    <div 
      onClick={props.onClick} 
      id={props.id}
      style={styles.tag}>
        <h1 style={styles.heading}>HELLO</h1>
        <h1 style={styles.text}>my name is:</h1>
        <h1 style={styles.nameArea}>{props.name}</h1>
    </div>
  )
};

let Form = (props) => {
    return(
    <form onSubmit={props.onSubmit}>
      <input 
        placeholder='Enter Name' 
        value={props.value}
        onChange={props.onChange}/>
      <input type='submit' />
    </form>
    )
};

class Container extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      names: ['Suhail', 'Sam', 'Phil'],
      inputValue: ''
    };
  };
  
  handleDelete = (e) => {
    let index = e.target.parentElement.id || e.target.id;
    let currNames = this.state.names;
    currNames.splice(index, 1)
    this.setState({names: currNames})
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    let currNames = this.state.names
    currNames.push(this.state.inputValue)
    this.setState({names: currNames, inputValue: ''})
  };
  
  handleChange = (e) => {
    var curr = e.target.value
    this.setState({inputValue: curr})
   };
  
  render() {
    var that = this;
    var nameList = this.state.names.map(function(value,index){
      return(<NameTag 
               name={value} 
               onClick={that.handleDelete.bind(that)}
               id={index} 
               key={index}
               />)
    })
    return (
      <div>
        <div style={styles.container}>
          <h1>NameTag GeneratR:</h1>
          <Form 
            onSubmit={this.handleSubmit} 
            value={this.state.inputValue}
            onChange={this.handleChange} />
        </div>
        
        <div style={styles.tagContainer}>
          {nameList}
        </div>
      </div>
    )
  }
};

const styles = {
  container: {
    margin: 20,
  },
  tagContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 10,
  },
  tag:{
    display: 'flex',
    flexDirection: 'column',
    height: 200,
    width: 300,
    borderRadius: 10,
    margin: 10,
    backgroundColor: '#F00000',
  },
  heading: {
    display: 'flex',
    marginTop: 5,
    fontSize: 60,
    justifyContent: 'center',
    color: 'white',
  },
  text: {
    display: 'flex',
    marginTop: 2,
    justifyContent: 'center',
    color: 'white',
  },
  nameArea:{
    display: 'flex',
    height: 200,
    margin: 10,
    fontSize: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

ReactDOM.render(
  <Container />,
  document.getElementById('root')
);
