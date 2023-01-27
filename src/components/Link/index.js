function Link(props) {
  return (
    <a href={props.url} target="_blank" rel="noreferrer">
      <span>{props.span}</span>
    </a>
  );
}

export default Link;
