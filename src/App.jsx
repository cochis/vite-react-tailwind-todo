import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";
function App() {
    return (
        <div
            className="bg-[url(./assets/images/bg-mobile-light.jpg)] 
        bg-contain bg-no-repeat bg-gray-300 min-h-screen "
        >
            <header className="container mx-auto   px-4 pt-8">
                <div className="flex justify-between mt-8">
                    <h1 className="text-3xl uppercase text-white font-semibold tracking-[0.3em]">
                        Todo
                    </h1>
                    <button>
                        <MoonIcon className="fill-red-400"/>
                    </button>
                </div>

                <form className=" flex mt-8 gap-4 rounded-md bg-white overflow-hidden py-2 items-center px-4">
                    <span className="  rounded-full border-2 h-5 w-5 inline-block "></span>
                    <input
                        type="text"
                        className="w-full text-gray-300 outline-none"
                        placeholder="Create a new TODO ..."
                    />
                </form>
            </header>

            <main className="container mx-auto px-4 mt-8">
                <div className="bg-white rounded-md [&>article]:p-4">
                    <article className="flex gap-4  border-b-gray-400 border-b">
                        <button className=" flex-none rounded-full border-2 h-5 w-5 inline-block "></button>
                        <p className="text-gray-600 grow">
                            Complete online JavasScript curse in
                        </p>
                        <button className="flex-none ">
                            <CrossIcon />
                        </button>
                    </article>

                    <section className="py-4 px-4 flex justify-between">
                        <span className="text-gray-400">5 items left</span>
                        <button className="text-gray-400">
                            Clear Completed
                        </button>
                    </section>
                </div>
            </main>

            <section className="container mx-auto px-4 mt-8">
                <div className=" bg-white bg-rounded-md p-4 flex justify-center gap-4">
                    <button className="text-blue-600">All</button>
                    <button className="hover:text-blue-600">Active</button>
                    <button className="hover:text-blue-600">Completed</button>
                </div>
            </section>

            <p className="text-center mt-8">Drag & Drop Reorder list</p>
        </div>
    );
}

export default App;
