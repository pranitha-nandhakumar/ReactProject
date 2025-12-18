import { useNavigate } from "react-router-dom";

const HooksDropdown = () => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    if (value) {
      navigate(`/learning/${value}`);
    }
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <label><strong>Select a Hook: </strong></label>

      <select onChange={handleChange} defaultValue="">
        <option value="" disabled>-- Choose Hook --</option>
        <option value="usestate">useState</option>
        <option value="useeffect">useEffect</option>
        <option value="useeffect-api">useEffect API</option>
        <option value="useref">useRef</option>
        <option value="usememo">useMemo</option>
        <option value="usecallback">useCallback</option>
      </select>
    </div>
  );
};

export default HooksDropdown;
