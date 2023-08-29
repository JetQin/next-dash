import ChatList from '@/app/components/chatlist'
import ChatBox from '../../components/chatbox'

const SideBar = () => {
    return (
        <aside className='fixed overflow-hidden left-0 top-0 z-10 h-screen w-[calc(3.73rem) border-r] border-gray-500'>

        </aside>
    )
}

const Content = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='w-[calc(100%-3.73rem)] ml-auto'>
            <div className='2xl:container mx-auto space-y-6'>
                <div className='h-16 border-b border-gray-300 dark:border-gray-700'>
              
                </div>
                <div className='h-96 flex justify-center items-center border border-dashed border-gray-300/40 dark:border-gray-700'>
                    {children}
                </div>
            </div>
        </main>
    )
}

export default function About() {
    return (
        <>
            <SideBar/>
            <Content>
                <ChatList />
            </Content>
        </>
    )
}