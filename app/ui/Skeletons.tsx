const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function TodoListSkeleton()
{
    return(
        <div className='flex flex-col'>
            <p className="w-full mt-8 rounded-md lg:w-[50%] mx-auto flex">Loading ....</p>
            {/* <TodoItemSkeleton/>
            <TodoItemSkeleton/>
            <TodoItemSkeleton/> */}
        </div>
    );
}

export function TodoItemSkeleton()
{
    return(
    <div className="w-full mt-8 bg-gray-200 rounded-md lg:w-[50%] mx-auto flex">
        <form className='size-8 mx-2 my-auto'>
        <input type="checkbox" disabled className='size-full text-blue-400 rounded-full focus:ring-0 focus:ring-offset-0'/>
        </form>
        <span className={`flex-grow inset-y-0 text-3xl`}>asdasd</span>
        <form className='bg-red-500 text-white'>
        <button className='size-8 text-4xl'> X </button>
        </form>
    </div>
    );
}