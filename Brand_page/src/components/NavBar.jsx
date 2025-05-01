export default function NavBar() {
  return (
    <nav className="w-full px-10 py-3 flex justify-between items-center fixed z-10 top-0 left-0 ">
      <div id="logo">
        <a href="#">
          <img
            src="/images/brand_logo.png"
            alt="brand logo"
            className="w-16 h-auto object-center"
          />
        </a>
      </div>
      <ul className="flex gap-6 ">
        <li className="text-base font-semibold uppercase hover:border-b-[1px] transition-all border-black">
          <a href="#">Menu</a>
        </li>
        <li className="text-base font-semibold uppercase hover:border-b-[1px] transition-all border-black">
          <a href="#">Location</a>
        </li>
        <li className="text-base font-semibold uppercase hover:border-b-[1px] transition-all border-black">
          <a href="#">About</a>
        </li>
        <li className="text-base font-semibold uppercase hover:border-b-[1px] transition-all border-black">
          <a href="#">Contact</a>
        </li>
      </ul>
      {/* Account related buttons  */}
      <div>
        <button className="red-btns">Login</button>
      </div>
      {/* Account related buttons  */}
    </nav>
  );
}
