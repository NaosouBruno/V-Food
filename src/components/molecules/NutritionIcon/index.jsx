import "./nutriIcon.scss";
function NutriIcon(props) {
  return (
    <div className="nutriIcon">
      <div className="nutriIcon-container">
        <img src={props.icon} />
      </div>
      <span className="nutriIcon-title">{props.title}</span>
    </div>
  );
}
export default NutriIcon;
