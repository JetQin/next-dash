import  Image from 'next/image'

export default function ChatBox({ text }: {text: string}) {

    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
            <Image className="h-12 w-12" width={12} height={12} src="/logo.svg" alt="ChitChat Logo"/>
        </div>
        <div>
            <div className="text-xl font-medium text-black">ChitChat</div>
            <p className="text-slate-500">{text}</p>
        </div>
    </div>
    )
}