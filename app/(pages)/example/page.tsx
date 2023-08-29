
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Header = () => {

}

export default function Example(){
    const navigation = [
        { name: 'Dashboard', href: '#', current: true },
        { name: 'Team', href: '#', current: false },
        { name: 'Projects', href: '#', current: false },
        { name: 'Calendar', href: '#', current: false },
    ]

    return (
        // <nav className="flex flex-row bg-gray-500">
        //     <div className="flex space-x-4">
        //        {
        //             navigation.map((item, i) => (
        //                 <a key={i} 
        //                    className={classNames(
        //                     item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
        //                     'rounded-md px-3 py-2 text-sm font-medium'
        //                   )}
        //                 >{item.name}</a>
        //             ))
        //         }
        //     </div>
        // </nav>
        <div className="flex">
            <div className="w-1/6 h-screen border-r-2 min-w-max border-slate-300">
                <ul className="p-12 mt-2">
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                    <li>D</li>
                </ul>
            </div>
            <div>
                <div className="w-screen h-16 border-b-2  border-slate-300">
                    <h1>Header</h1>
                </div>
                <div className="container">
                    <h1 className="text-lg">Hello</h1>
                </div>
            </div>
        </div>
    )
}
