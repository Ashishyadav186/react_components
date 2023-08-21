/* eslint-disable no-undef */
class counter extends Component {
state={
    count:0 , 
    tags : ["tag1" , "tag2" , "tag3"]
};
constructor () {
  super();
  this.handleIncrement.bind(this);
}
 styles = {
    fontSize : 50,
    fontweight :"bold"

 };
 renderTags(){
  if (this.state.tags.length === 0) return <p>there are no tags!</p>;
  return <ul>{this.state.tags.map(tag => <li key = {tag}>{tag}</li>)}</ul>;
 }
 //handleIncrement() {
  handleIncrement = () =>{
  console.log("increment clicked",this); //binding event handles means will point to the counter object
  //updating the state 
  this.setState ({ count : this.state.count + 1})
  // obj.method () ;
  //function() ; because standalone
 } ; 
 // passing event arguments
 doHandleIncrement = () => {
  this.handleIncrement ( { id:1});
 }; 
render() {
    return (
    <div>
      <span style ={this.styles} classname="badge badge=primary m-2">
            {this.formatCount()}
            </span>
            <button onClick = {this.handleIncrement()} ClassName ="btn btn-secondary btn-sm"> Increment </button>
            <ul> {this.state.tags.map(tag => <li key= {tag}>{tag}</li>)}</ul> 
            //{this.renderTags() }
    </div>
    );
}
  getBadgeClasses(){
    let classes ="badge m-2 badge";
    Classes  += this.state.count == 0 ? "warning" : "primary";
    return classes ;
  }
  formatCount () {
    const { count } = this.state;
    return count ===0 ? "zero" : count;

  }}
export default counter ;