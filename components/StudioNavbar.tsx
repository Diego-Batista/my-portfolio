import Link from "next/link"
import { IoReturnUpBackSharp } from 'react-icons/io5';

function StudioNavbar(props: any) {
  return (
    <div>
        <div className="flex items-center justify-between p-5">
            <Link href="/" className="text-[#8257E5] flex items-center">
                <IoReturnUpBackSharp size={40} className="h-6 text-[#8257E5] mr-2"/>
                Volte para o Site
            </Link>

            <div className="hidden md:flex p-3 rounded-lg justify-center border-2 border-[#8257E5] text-[#8257E5]  hover:bg-[#8257E5] hover:text-white transition delay-100 duration-100 ease-in-out">
                <Link href="https://github.com/Diego-Batista" target="_blank" className=" font-bold ml-2 ">
                    github.com/Diego-Batista
                </Link>
            </div>
        </div>
        <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar