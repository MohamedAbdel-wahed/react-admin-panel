import './widget.scss'



function Widget({
  title,
  count,
  link,
  percentage,
  ArrowIcon,
  WidgetIcon,
  widgetIconBgColor,
  widgetIconColor,
}) {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{title}</span>
        <span className="count">{count}</span>
        <a href="#" className="link">
          {link}
        </a>
      </div>
      <div className="right">
        <div className="percentage">
          <ArrowIcon />
          <span>+{percentage}</span>
        </div>
        <span
          className="icon"
          style={{ backgroundColor: widgetIconBgColor, color: widgetIconColor }}
        >
          <WidgetIcon />
        </span>
      </div>
    </div>
  )
}

export default Widget