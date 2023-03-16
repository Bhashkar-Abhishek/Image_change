import "./Image.css"
export default function Image(props) {
    return (
    <div  className='img'>
      <img src={props.pic}/> 
    </div>
  )
}
