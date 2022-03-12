import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

// classes addes the className class along with any other classNames present in props.children

export default Card;
