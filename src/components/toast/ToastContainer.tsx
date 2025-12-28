import { IToast } from "./ToastProvider";

const ToastContainer = ({
  toast,
  onRemove,
}: {
  toast: IToast[];
  onRemove: (id: number) => void;
}) => {
  return (
    <ul className="absolute top-2 right-2 flex flex-col gap-2">
      {toast?.map((item) => {
        return (
          <li
            className={`flex justify-between items-start gap-2 p-2 rounded-md text-sm font-semibold ${
              item?.type === "Success"
                ? "bg-green-200"
                : item?.type === "Error"
                ? "bg-red-200"
                : "bg-blue-200"
            }`}
            key={item?.id}
          >
            {item?.content}
            <button onClick={() => onRemove(item?.id)}>&times;</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ToastContainer;
