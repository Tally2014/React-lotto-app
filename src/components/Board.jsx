import Row from "./Row"

export default function Board({settings}) {
    
    const {rows, maxRandomNumber, includeBonusBall, maxBonusNumber, boards} = settings;

  return (
    <div>
        <Row/>
        <Row/>
        <Row/>
        <Row/>
        <Row/>
    </div>
  )
}
