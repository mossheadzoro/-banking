"use client";
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}:{amount:number}) => {
  return (
    <p className='w-full'><CountUp decimal='.' duration={1.5} decimals={2} prefix='$' end={amount}></CountUp></p>
  )
}

export default AnimatedCounter