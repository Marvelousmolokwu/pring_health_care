const Home = () => {
  return (
    <>
      <section className=" relative flex items-center justify-center ">
        <div className="fixed top-0">
          <div className="absolute bg-cream1 w-full h-full   left-0 "></div>
          <img
            src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1687383537/woman-5380651_eh7psp.jpg"
            alt=""
            className="object-cover  w-full h-full "
          />
        </div>

        <div className="relative">
          <h1 className="h-96 bg-red-200">me</h1>
          <h1 className="h-96 bg-black">me</h1>
          <h1 className="h-96 bg-green-200">me</h1>
        </div>
      </section>
    </>
  );
};

export default Home;
