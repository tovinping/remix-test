import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { sleep } from "~/utils";
export const loader: LoaderFunction = async () => {
  return sleep(3000, { name: "tovinping", age: 18 });
};
export default () => {
  const data = useLoaderData()
  return (
    <div>
      <h1>测试请示数据慢</h1>
      <p>请示数据慢</p>
      <div>姓名: {data.name}-{data.age}</div>
    </div>
  );
};
