const Main = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50">
        <div className="p-4 grid grid-flow-col gap-2 items-start">
        <Widget />
        <Widget />
        <Widget />
        </div>
    </div>
  );
};

const Widget = () => {
    return (
        <div className="border-2 border-black min-w-80 min-h-40 w-80 rounded-md">test</div>
    )
}

export default Main;
