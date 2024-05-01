import React from 'react'
import { User } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'



interface GroupMembers{
data:User
}
const GroupMember:React.FC<GroupMembers> = ({data}) => {


  return (
    <>
    <div className='flex items-center justify-start'>

    
    
    <Image src={data?.image||'/images/placeholder.jpg'} height={40} width={40} alt='Member avatar' className='rounded-full my-5 mr-3'/>
    <div className=''>
        {data.name}

    </div>
    
    
    
    </div>
</>
  )
}

export default GroupMember