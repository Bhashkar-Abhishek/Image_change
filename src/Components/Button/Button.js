import "./Button.css"
export default function Button(props) {
  return (
    <div className='btn-box'>
      <div>
      <button className="btn"
      onClick={props.change}
      >Change Pic</button>

      </div>
    </div>
  )
}

