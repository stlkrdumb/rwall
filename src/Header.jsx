import logoSvg from './assets/logo.svg'

function Header() {

    return (
        <>
            <nav className="py-5 md:py-7 lg:py-10 px-3 bg-mint border-rdark border-b-3">
                <div className="flex justify-start lg:justify-center">
                    <img className="w-40 lg:w-50 xl:w-60 h-auto animate-bounce" src={logoSvg} alt="Rwall" />
                </div>
                <p className="description px-0 pt-1 
                lg:text-center text-xs md:text-sm lg:text-md xl:text-lg 
                text-gray-700">
                    <b>Rialo's</b> wallpaper collection, powered by krita.
                    </p>
            </nav>
        </>
    )

}

export default Header;