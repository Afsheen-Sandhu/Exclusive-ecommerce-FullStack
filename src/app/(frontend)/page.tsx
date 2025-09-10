import { HomePage } from '@/components/homepage'
import { products } from '@/components/ui/card/products'
import React from 'react'



const page = () => {
  return (
    <div className=''> 
        <HomePage products={products} />
    </div>
  )
}

export default page