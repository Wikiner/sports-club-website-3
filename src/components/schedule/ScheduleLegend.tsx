const ScheduleLegend = () => {
  const legendItems = [
    { color: "bg-green-500", label: "Много мест" },
    { color: "bg-yellow-500", label: "Мало мест" },
    { color: "bg-orange-500", label: "Почти заполнено" },
    { color: "bg-red-500", label: "Мест нет" },
  ];

  return (
    <div className="bg-white rounded-lg p-6 mb-8 max-w-4xl mx-auto">
      <h3 className="text-lg font-semibold mb-4">Обозначения:</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {legendItems.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div className={`w-4 h-4 ${item.color} rounded`}></div>
            <span className="text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleLegend;
