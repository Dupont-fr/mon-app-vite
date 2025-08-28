const Note = ({ note, toogleImportance }) => {
  const label = note.important ? 'make not important ❌' : 'make important ✅'

  return (
    <li className='note'>
      {note.content}
      <button onClick={toogleImportance}>{label}</button>
    </li>
  )
}

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ul>
    </div>
  )
}

export default Note
