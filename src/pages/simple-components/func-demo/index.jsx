function FuncDemo(props) {
  console.log("hsjalog----", props);
  const value = props.demo;
  const list = [1, 2, 3, 4, 5];
  const func = (value) => {
    console.log("hsjalog----", value);
  };
  return (
    <>
      <h2>绑定点击事件和绑定样式</h2>
      <div style={{ color: "green" }} onClick={() => func(value)}>
        按钮1--------{value}
      </div>
      <h2>直接绑定html元素</h2>
      <div dangerouslySetInnerHTML={{ __html: "<h3>666666666</h3>" }}></div>
      <h2>遍历渲染dom</h2>
      <ul>
        {list.map((item, index) => (
          <li
            key={index}
            style={{ cursor: "pointer" }}
            onClick={() => props.callBack && props.callBack(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default FuncDemo;
