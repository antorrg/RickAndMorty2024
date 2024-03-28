import { useNavigate } from "react-router-dom";

//import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Button
      onClick={goBack}>
      Volver
    </Button>
  );
};

export default BackButton;