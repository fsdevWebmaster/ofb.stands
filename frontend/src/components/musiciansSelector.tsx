import { useOfb } from "../hooks/useOfb";
import { User } from "../interfaces"

type Props = {
  listItems:User[];
  setSelected: (user:User) => void
}

export const MusiciansSelector = ({ listItems, setSelected }: Props) => {
  const { getUserByName } = useOfb();

  const handleSelected = (e:React.FocusEvent<HTMLInputElement, Element>) => {
    const selected = getUserByName(e.target.value);
    if (selected) {
      setSelected(selected);
    }
  }

  return (
    <>
      <input 
        list="items-list"
        name="itemSelected"
        className="form-control mb-3" 
        onBlur={ e => handleSelected(e) }
      />

      <datalist id="items-list">
        { listItems.map((item) => (
          <option key={item.idDoc} value={item.name}>
            { item.accumulated }
          </option>
        ))}
      </datalist>
    </>
  )
}