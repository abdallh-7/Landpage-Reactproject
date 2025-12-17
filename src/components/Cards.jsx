function Cards(){
  const cardData = [
    {
      title: "تعلم React",
      description: "ابدأ من الأساسيات حتى المشاريع المتقدمة.",
    },
    {
      title: "Tailwind CSS",
      description: "تصميم سريع وسهل مع Tailwind لتطبيقات جميلة.",
    },
    {
      title: "مشاريع عملية",
      description: "تطبيق ما تعلمته في مشاريع حقيقية خطوة خطوة.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg dark:text-black shadow hover:shadow-lg transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        {cardData.map((card, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-gray-700">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Cards
