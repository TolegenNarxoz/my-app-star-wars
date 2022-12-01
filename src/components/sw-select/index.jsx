export const Select = ({ tab, handleChangeTab }) => {
  return (
    <select
      placeholder="Choose your path"
      className="select-item"
      value={tab}
      onChange={handleChangeTab}
    >
      <option>Characters</option>
      <option>Planets</option>
      <option>Starships</option>
      <option>Films</option>
      <option>Games</option>
    </select>
  );
};
