import { CustomButton } from "./components/html/CustomButton";

const App: React.FC = () => {
  return (
    <>
      <CustomButton variant="primary" onClick={() => console.log("clicked")}>
        Primary Button
      </CustomButton>
    </>
  );
};

export default App;
