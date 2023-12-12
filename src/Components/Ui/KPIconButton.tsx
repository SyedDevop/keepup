type Props = {} & Omit<React.HtmlHTMLAttributes<HTMLButtonElement>, "type">;

function KPIconButton(props: Props) {
  return (
    <button type="button" className={"icon-btn " + props.className} {...props}>
      {props.children}
    </button>
  );
}

KPIconButton.defaultProps = {
  className: "",
};

export default KPIconButton;
