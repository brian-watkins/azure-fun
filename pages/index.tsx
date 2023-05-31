import { ThingList } from '@/components/thingList'

export default function Home() {
  const prodThings = [
    { id: "1", name: "apple", age: 2 },
    { id: "2", name: "Cool Dude", age: 26 },
    { id: "3", name: "computer", age: 1002 }
  ]

  return (
    <>
      <h1 className="text-xl font-bold">Behold the list of things!</h1>
      <ThingList things={prodThings} />
    </>
  )
}
