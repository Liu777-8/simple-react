import React from "react";

interface SimplePageProps {
  demo: string;
  callBack?: (value: string) => void;
}
// Partial 是一个内置的泛型工具类型，用于将某个类型的所有属性变为可选属性。
const defaultProps: Partial<SimplePageProps> = {
  demo: "默认标题",
};
function SimplePage(props: SimplePageProps) {
  const { demo, callBack } = { ...defaultProps, ...props };
  return (
    <div>
      ts简易方法
      <li onClick={() => callBack && callBack(demo)}>{demo}</li>
    </div>
  );
}

export default SimplePage;
