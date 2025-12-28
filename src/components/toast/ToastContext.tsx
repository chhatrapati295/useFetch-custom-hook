import { createContext, useContext } from "react";

interface IShowToast {
  showToast: (content: string, type: "Success" | "Error" | "Info") => void;
}

const ToastContext = createContext<IShowToast | null>(null);

export const useToast = () => {
  const toastWrapper = useContext(ToastContext);
  if (!toastWrapper) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return toastWrapper;
};

export default ToastContext;
