import Row from "./Row"

export default function Board({settings}) {
    
    const {rows, maxRandomNumber, includeBonusBall, maxBonusNumber} = settings;
    console.log(rows);

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
