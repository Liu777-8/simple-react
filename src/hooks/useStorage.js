import { useSyncExternalStore } from "react";

export const useStorage = (key, initialValue) => {
  // 监听storage事件
  const subscribe = (callback) => {
    window.addEventListener("storage", callback);
    return () => {
      window.removeEventListener("storage", callback);
    };
  };
  // 获取快照
  const getSnapshot = () => {
    return (
      (window.localStorage.getItem(key)
        ? JSON.parse(window.localStorage.getItem(key))
        : null) || initialValue
    );
  };
  // 设置storage
  const setStorage = (value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new StorageEvent("storage"));
  };
  // 使用useSyncExternalStore来获取快照
  const res = useSyncExternalStore(subscribe, getSnapshot);
  return [res, setStorage];
};
