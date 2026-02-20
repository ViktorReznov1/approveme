function Index() {
  return (
    // h-screen harus di DIV utama supaya dia menempati seluruh layar
    <div className='flex h-screen items-center justify-center inline-screen bg-gray-900'>
        <h1 className="text-6xl font-bold text-white drop-shadow-lg">
            APPROVE
        </h1>
        <h1 className="text-6xl font-bold text-green-500 drop-shadow-lg">ME</h1>
    </div>
  );
}

export default Index