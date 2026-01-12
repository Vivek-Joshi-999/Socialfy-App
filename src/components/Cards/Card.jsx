const Card = ({ icon: Icon, title, desc }) => {
  return (
    <div
      className="
        flex flex-col
        h-60 w-56
        shadow-md shadow-gray-500
        justify-center items-center
        p-4 rounded-2xl transition-all duration-300 ease-in-out
    hover:-translate-y-2
    hover:shadow-xl hover:shadow-purple-400
      ">
      <Icon className=" w-20 h-20 text-purple-700 mb-3 " />

      <h2 className="font-bold text-lg mb-2">{title}</h2>

      <p className="leading-normal line-clamp-3 text-center text-gray-600">
        {desc}
      </p>
    </div>
  );
};

export default Card;
