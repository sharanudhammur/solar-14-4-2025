import "./styles.scss";
export default function LayoutContainer({ children, yellowBg, bgColor }) {
  return (
    <div
      className="layout-container-wrapper"
      style={{
        backgroundColor: yellowBg ? "#fecc30" : bgColor ? bgColor : "#fff"
      }}
    >
      <div className="layout-container">{children}</div>
    </div>
  );
}
