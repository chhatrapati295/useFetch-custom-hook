import { useToast } from "./components/toast/ToastContext";

const App = () => {
  const { showToast } = useToast();
  return (
    <div className="p-4">
      <button
        className="border p-2 rounded-md text-sm mr-2"
        onClick={() => {
          showToast("Hurray", "Success");
        }}
      >
        Show Success
      </button>
      <button
        className="border p-2 rounded-md text-sm mr-2"
        onClick={() => {
          showToast("Hurray", "Error");
        }}
      >
        Show Error
      </button>
      <button
        className="border p-2 rounded-md text-sm mr-2"
        onClick={() => {
          showToast("Hurray", "Info");
        }}
      >
        Show Info
      </button>
    </div>
  );
};

export default App;
