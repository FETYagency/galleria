const MasonryLayout = (props) => {
  const columnWrapper = {};
  const result = [];
  for (let i = 0; i < props.columns; i++) {
    columnWrapper[`column${i}`] = [];
  }
  for (let i = 0; i < props.children.length; i++) {
    const columnIndex = i % props.columns;
    columnWrapper[`column${columnIndex}`].push(props.children[i]);
  }
  for (let i = 0; i < props.columns; i++) {
    result.push(
      <div className="flex flex-col gap-[24px]">
        {columnWrapper[`column${i}`]}
      </div>,
    );
  }
  return <div className="flex w-fit gap-[41px]">{result}</div>;
};
export default MasonryLayout;
