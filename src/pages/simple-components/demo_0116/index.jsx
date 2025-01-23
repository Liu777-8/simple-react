import React, { memo } from "react";
import { useParams } from "react-router-dom";
const MyComponent = React.memo(({ prop1, prop2 }) => {
  // 组件逻辑
  console.log("hsjalog----", prop1, prop2);
});
const App = () => {
  const params = useParams();
  console.log("params", params);
  return (
    <div>
      <h1>demo_0116</h1>
      <p>params:{params.id}</p>
    </div>
  );
};

export default App;
