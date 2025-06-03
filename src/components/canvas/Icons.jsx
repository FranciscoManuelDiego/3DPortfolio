const Icons = ({icon}) => {
  return (
    <div className="flex justify-center items-center bg-black-100 p-2 rounded-2xl w-20 h-20 xl:w-24 xl:h-24">
      <img className="w-full h-full object-contain" src={icon} alt="tech icon" />
    </div>
  );
}

export default Icons;