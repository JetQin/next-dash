'use client'

import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import User from './components/user'
import ContentContainer from './components/content'
import SideBar from './components/sidebar'
import ChannelBar from './components/channel'

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Home() {
  // const session = await getServerSession(authOptions)
  return (
    <div className="flex">
    <SideBar />
    <ChannelBar />
    <ContentContainer />
  </div>
  )
}
