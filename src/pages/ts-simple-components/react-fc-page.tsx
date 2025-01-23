import React from "react";

interface SimplePageProps {
  demo: string;
  callBack?: (value: string) => void;
}
const ReactFcPage: React.FC<SimplePageProps> = ({
  demo = "默认标题",
  callBack,
}) => {
  return (
    <div>
      ts简易方法
      <li onClick={() => callBack && callBack(demo)}>{demo}</li>
    </div>
  );
};

export default ReactFcPage;
