function Navbar() {

    return (
        <nav className="relative w-full flex flex-wrap items-center justify-between bg-neutral-800 bg-opacity-80 shadow-lg border-b-4 border-beijing-red">
            <div className="w-full my-4 flex flex-wrap items-center justify-around mx-auto px-6 relative">
                <div className="px-4 w-48">
                    <a className="text-xl text-slate-200 hover:text-white focus:text-white" href="/">Home</a>
                </div>
                <div className="px-4 w-48">
                    <a className="text-xl text-slate-200 hover:text-white focus:text-white" href="/location">Location & Hours</a>
                </div>
                <div className="px-4 w-48">
                    <a className="text-xl text-slate-200 hover:text-white focus:text-white" href="/"><img src="../../public/Beijing-Cuisines-Title.png" className="max-h-32 -top-3 absolute"/></a>
                </div>
                <div className="px-4 w-48">
                    <a className="text-xl text-slate-200 hover:text-white focus:text-white" href="/menu">Menu</a>
                </div>
                <div className="px-4 w-48">
                    <a className="text-xl text-slate-200 hover:text-white focus:text-white" href="/contact-us">Contact</a>
                </div>
            </div>
        </nav>
    )

}

export default Navbar