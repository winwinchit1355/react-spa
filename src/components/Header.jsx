import Item from "./Item";

export default function Header() {
    const lists = [1,2,3,4,5,6,7];
  return (
    <div class="header">
        <h1>Header</h1>
        <div>
            {lists.map(item => <Item key={item} item={item} />)}
        </div>
    </div>

  )
}
