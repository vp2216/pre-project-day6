import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom";

function Seachbar() {

  const [tag, setTag] = useState("");

  const navigate = useNavigate();

  function submit() {
    if (!tag) return;
    navigate("/search", { state: { tag: tag } });
    setTag("");
  }

  return (
    <div className="searcharea">
      <input
        className="search"
        placeholder="Enter a photo name"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        onKeyDown={(e) => (e.key == "Enter" ? submit() : null)}
      />
      <button className="searchbtn">
        <GoSearch className="searchbtnimage" onClick={submit} />
      </button>
    </div>
  );
}

export default Seachbar;
