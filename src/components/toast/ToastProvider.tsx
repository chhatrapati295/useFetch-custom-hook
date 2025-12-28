import { useEffect, useRef, useState } from "react";
import ToastContext from "./ToastContext";
import ToastContainer from "./ToastContainer";

export interface IToast {
  id: number;
  content: string;
  type: "Success" | "Error" | "Info";
}
const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toast, setToast] = useState<IToast[]>([]);
  const timeoutsRef = useRef<number[]>([]);

  const showToast = (content: string, type: "Success" | "Error" | "Info") => {
    const id = Date.now();

    const timeoutId = window.setTimeout(() => {
      setToast((prev) => prev.filter((t) => t.id !== id));
    }, 3000);

    timeoutsRef.current.push(timeoutId);

    setToast((prev) => [{ id, content, type }, ...prev]);
  };

  // 👇 cleanup on unmount
  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
    };
  }, []);

  const removeToast = (id: number) => {
    setToast((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer toast={toast} onRemove={removeToast} />
    </ToastContext.Provider>
  );
};

export default ToastProvider;
