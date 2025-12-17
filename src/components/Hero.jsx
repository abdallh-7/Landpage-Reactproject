function Hero (){
  return (
    <section className="bg-indigo-600 dark:bg-gray-700 text-white dark:text-gray-100 py-20 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          أهلا بك في React Training
        </h1>
        <p className="text-lg md:text-xl mb-6">
          نتعلم React + Tailwind خطوة خطوة بطريقة عملية وممتعة
        </p>
        <button className="bg-green-400 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-500 transition">
          ابدأ الآن
        </button>
      </div>
    </section>
  )
}

export default Hero
