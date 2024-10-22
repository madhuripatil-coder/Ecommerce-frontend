import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Popoular } from '../Components/Popular/Popoular'
import { Offers } from '../Components/Offers/Offers'
import { NewCollections } from '../Components/NewCollections/NewCollections'
import { NewsLetter } from '../Components/NewsLetters/NewsLetter'

export const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popoular/>
        <Offers/>
        <NewCollections/>
        <NewsLetter/>
    </div>
  )
}
