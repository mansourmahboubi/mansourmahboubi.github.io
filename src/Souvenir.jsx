const items = [
  {
    name: "Gaz",
    description:
      "A traditional Persian nougat made from the sap of the angebin plant, mixed with rosewater, pistachios, and other nuts.",
  },
  {
    name: "Sohan",
    description:
      "A traditional Persian saffron brittle toffee made with wheat sprout, egg yolks, rosewater, sugar, and nuts.",
  },
  {
    name: "Baslogh",
    description:
      "A soft and chewy confection made from starch and sugar, often flavored with rosewater or other traditional essences.",
  },
  {
    name: "Koloucheh Lahijan",
    description:
      "A traditional cookie from Lahijan, famous for its delicate texture and rich filling of ground walnuts, cinnamon, and cardamom. Known as one of Gilan province's most beloved sweets.",
  },
];

function Souvenir() {
  return (
    <div className="max-w-7xl mx-auto p-8 font-sans">
      <header className="text-center mb-12">
        <h1 className="text-4xl mb-4">Traditional Iranian Delicacies</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Discover the authentic taste of Persian sweets and souvenirs
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1 cursor-pointer"
          >
            <h2 className="text-2xl text-orange-500 mb-4">{item.name}</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
