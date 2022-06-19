import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import prisma from 'lib/prisma'

export default function Home({ cars }) {
  return (
    <div className={styles.container}>
      <ul>
        {cars.map(car => <li key={car.model + car.brand}>{car.brand} {car.model}</li>)}
      </ul>
    </div>
  )
}

export async function getServerSideProps() {
  const cars = JSON.parse(JSON.stringify(await prisma.car.findMany()))

  return {
    props: {
      cars
    }
  }
}
