'use client'
import Button from '@/components/ui/Button'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <div className="space-x-4">
      <Button variant="primary" onClick={() => alert('Primary clicked!')}>Primary Button</Button>
      <Button variant="outlined">Outlined Button</Button>
    </div>
    </div>
  )
}

export default page