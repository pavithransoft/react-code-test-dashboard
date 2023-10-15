const Card = (props) => {
  return (
    <div className="bg-white rounded-lg grid grid-cols-2 place-items-center shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] cursor-pointer hover:bg-slate-300 group">
      <>{props.icon}</>
      <div className="justify-self-start font-semibold">
        <h1 className="text-sm text-gray-400 group-hover:text-gray-600">
          {props.title}
        </h1>
        <h1 className="text-2xl group-hover:text-white">{props.price}</h1>
        <h1 className="text-sm text-gray-500 flex items-center">
          {props.description}
        </h1>
      </div>
    </div>
  );
};

export default Card;
