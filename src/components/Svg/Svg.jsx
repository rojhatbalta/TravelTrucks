function Svg({ cssClass, iconName }) {
  return (
    <svg className={cssClass}>
      <use href={`../../assets/svg/icons.svg#icon-${iconName}`} />
    </svg>
  );
}

export default Svg;
