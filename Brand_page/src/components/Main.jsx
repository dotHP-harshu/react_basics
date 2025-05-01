export default function Main() {
  return (
    <main className="font-sans px-40 h-screen flex items-center">
      <div className="left-main w-1/2 flex flex-col items-start justify-center gap-6 h-full">
        <h1 className="font-extrabold text-8xl uppercase">
          your feet deserve the best
        </h1>
        <p className="text-base font-semibold text-zinc-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
          aliquam omnis accusantium Cumque?
        </p>
        <div className="main-buttons flex gap-4 items-center">
          <button className="red-btns">Shop now</button>
          <button className="white-btns">Cotegory</button>
        </div>
        <p className="text-gray-400 text-sm">also available on</p>
        <div className="platform-links flex items-center gap-6">
          <a href="#">
            <img
              src="/images/amazon.png"
              alt="amazon"
              className="w-6 h-auto object-center"
            />
          </a>
          <a href="#">
            <img
              src="/images/flipkart.png"
              alt="flipkart"
              className="w-6 h-auto object-center"
            />
          </a>
        </div>
      </div>
      <div className="right-main w-1/2 h-full ">
        <div className="img-container w-full h-full p-6 flex justify-center items-center">
          <img
            src="/images/hero-image.png"
            alt="hero"
            className="w-full h-auto object-center"
          />
        </div>
      </div>
    </main>
  );
}
