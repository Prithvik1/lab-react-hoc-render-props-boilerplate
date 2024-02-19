import WrapperHoc from "./WrapperHoc"

function LikePostHoc(props) {
  return (
    <div>
      <button onClick={props.handleCounter}>Like Post {props.counter}</button>
    </div>
  )
}

export default WrapperHoc(LikePostHoc);