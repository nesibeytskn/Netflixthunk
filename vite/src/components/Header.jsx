import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-dark">
      <img
        onClick={() => navigate("/")}
        style={{ maxWidth: "100px", cursor: "pointer" }}
        src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
      />
    </div>
  );
};

export default Header;
