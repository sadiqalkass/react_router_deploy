import Feed from './Feed'
import { useStoreState } from 'easy-peasy'

const HOME = ({ isLoading, fetchError  }) => {
  const searchResults  = useStoreState((state) => state.searchResults);
  return (
    <main className='Home'>
       {isLoading && <p className='statusMsg'>Loading posts...</p>}
       {!isLoading && fetchError && <p className='statusMsg' style={{ color: "red"}}>{fetchError}</p>}
       {!isLoading && !fetchError && (searchResults.length ? <Feed posts={searchResults} /> : <p className='statusMsg'>No posts to Display</p>)}
    </main>
  )
}

export default HOME