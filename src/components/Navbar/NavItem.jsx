function NavItem({ children, onNavbarIsOpen }) {
  return (
    <li
      className={`text-xl px-6 py-3 border-b border-gray-700 w-full text-start transition-all duration-500 ${
        onNavbarIsOpen
          ? 'animate-[enterLeft_.7s_ease-in-out_forwards]'
          : 'animate-[outRight_.7s_ease-in-out_forwards]'
      }`}
    >
      {children}
    </li>
  )
}

export default NavItem
