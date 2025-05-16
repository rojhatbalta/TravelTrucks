function Svg({ className, iconName }) {
  return (
    <svg className={className}>
      <use href={`/icons.svg#icon-${iconName}`} />
    </svg>
  );
}

export default Svg;
