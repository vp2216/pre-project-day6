import { useNavigate } from "react-router-dom";

function Default() {

  const navigate = useNavigate();

    return (
        <div className="default">
          <button className="btn" onClick={()=>navigate("/mountain")}>
            Mountain
          </button>
          <button className="btn" onClick={()=>navigate("/beaches")}>
            Beaches
          </button>
          <button className="btn" onClick={()=>navigate("/birds")}>
            Birds
          </button>
          <button className="btn" onClick={()=>navigate("/food")}>
            Food
          </button>
        </div>
    );
}

export default Default;