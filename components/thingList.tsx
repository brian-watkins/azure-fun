
import { Thing, displayableThingName } from "@/lib/thing"

export interface ThingListProps {
  things: Array<Thing>
}

export function ThingList (props: ThingListProps) {
  return <div>
    <ul>
      {props.things.map(thingView)}
    </ul>
  </div>
}

function thingView(thing: Thing) {
  return <li key={thing.id}>
    {displayableThingName(thing)}
  </li>
}