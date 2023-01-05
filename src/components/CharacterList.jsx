import React, { useEffect, useState } from 'react'
import Character from './Character'

const CharacterList = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`,
      )
      const data = await response.json()
      setLoading(false)
      setCharacters(data.results)
    }

    fetchData()
  }, [page])

  if (loading) {
    return <div>Loading</div>
  }

  return (
    <div className="container">
      <NavPage page={page} setPage={setPage} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="row">
          {characters.map((character) => (
            <div className="col-md-4" key={character.id}>
              <Character character={character} />
            </div>
          ))}
        </div>
      )}
      <NavPage page={page} setPage={setPage} />
    </div>
  )
}

const NavPage = ({ page, setPage }) => {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <p>Page: {page}</p>
      <div>
        {page > 1 ? (
            <button
            onClick={() => setPage(--page)}
            className="btn btn-primary btn-sm mx-3"
          >
            {'<'} Page {page - 1}
          </button>
        ) : (<div></div>)}
        <button
          onClick={() => setPage(++page)}
          className="btn btn-primary btn-sm"
        >
          Page {page + 1} {'>'}
        </button>
      </div>
    </header>
  )
}

export default CharacterList
