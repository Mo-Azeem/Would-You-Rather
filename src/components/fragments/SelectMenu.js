
function SelectMenu({id, name, values}) {
    return(
        <select name={name} id={name}
        className='text-center w-40 px-3 py-2 outline-none font-semibold tracking-tight rounded-full bg-gray-50 text-gray-900'>
            <option key={name} disabled defaultValue={true} className='text-gray-400'>{name}</option>
            {values.map(value => <option key={value} value={value}>{value}</option> )}
        </select>
    )
}

export default SelectMenu;