import SyncLoader from "react-spinners/SyncLoader";

const Loading = () => {

  return (
    <div className="loading-dots">
      <SyncLoader
        color={"#265061"}
        size={30}
        aria-label="Loading dots"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;