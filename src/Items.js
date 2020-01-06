import React,{Component} from 'react';

class Items extends Component {
  render() { 
      console.log(this.props);
      const items = this.props.items;
      const itemList = items.map (item => {
      return (
    <div className="items" id = {item.itemId}>
    <div> Name: {item.name} </div>
    <div> Age: { item.price } </div>
    </div>
  )
  });
  return ( <div className="itemList">{itemList}</div>
  );
}
}

export default Items;
