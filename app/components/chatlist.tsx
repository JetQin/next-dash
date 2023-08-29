import Image from 'next/image'
import { peoples } from '@/constants'

export default function ChatList(){
    return (
        <ul role="list" className="p-6 divide-y divide-slate-200">
           {
            peoples.map((person, i) => (     
                <li key={i} className="flex py-4 first:pt-0 last:pb-0">
                    <Image className="h-10 w-10 rounded-full" width={16} height={16} src={person.avatar} alt="" />
                    <div className="ml-3 overflow-hidden">
                        <p className="text-sm font-medium text-slate-900">{person.name}</p>
                        <p className="text-sm text-slate-500 truncate">{person.email}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}