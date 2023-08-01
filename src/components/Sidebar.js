export default function Sidebar() {
  return (
    <div className="sidebar w-64 border-r text-gray-800 h-[calc(100vh-4rem)]">
      <div className="sidebar-container w-[85%] pt-6">
        <h2 className="text-xl font-semibold">Get started</h2>
        <p className="pt-4 text-sm">
          First choose your kigo from the dropdown menus on the right hand side
          of the screen.
        </p>
        <p className="pt-4 text-sm">
          Then write a simple prompt about what you would like your haiku to
          represent
        </p>
        <p className="pt-4 text-sm">
          Remember to keep it simple and meaningful
        </p>
        <p className="pt-4 text-sm">
          Finally, click generate to see your Haiku
        </p>
        <h3 className="text-lg font-semibold pt-4">Some examples </h3>
        <p className="italic py-2 text-sm">
          Write a haiku about warm summer nights drinking beer
        </p>
        <p className="italic py-2 text-sm">
          Write a haiku about the smell of the ocean in the spring
        </p>
        <p className="italic py-2 text-sm">
          Write a haiku about hiking in the mountains in the snow{" "}
        </p>
      </div>
    </div>
  );
}
