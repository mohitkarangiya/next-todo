import Link from 'next/link';
export default function NavBar()
{
return (
    <nav className="sticky text-white top-0 z-10 bg-blue-400 shadow-md">
      <div className="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link href="/" className="text-4xl font-bold">TODOS</Link>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href="/register" className="hover:bg-white hover:text-black px-3 py-2 rounded-md font-medium text-xl">Register</Link>
                <Link href="/login" className="hover:bg-white hover:text-black px-3 py-2 rounded-md font-medium text-xl">Log In</Link>
              </div>
            </div>
            {/* User profile or additional menu items */}
          </div>
        </div>
      </div>
    </nav>
  );
}