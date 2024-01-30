import Row from "./Row"

export default function Board({settings}) {
    
    const {rows, maxRandomNumber, includeBonusBall, maxBonusNumber, boards} = settings;
    
    // Create an array with 'boards' number of elements and map each element to a Row component
    const rowComponents = [...Array(boards)].map((_, index) => <Row key={index} />);

  return (
    <div>
        {rowComponents}
    </div>
  )
}
