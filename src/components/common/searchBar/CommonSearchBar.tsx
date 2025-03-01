import { useState } from 'react'
import styles from './CommonSearchBar.module.scss'
import { searchState } from '@/recoil/atoms/searchState'
import { useRecoilState } from 'recoil'
import { setServers } from 'dns'
import { pageState } from '@/recoil/atoms/pageState'

function CommonSearchBar() {
  const [search, setSearch] = useRecoilState(searchState)
  const [page, setPage] = useRecoilState(pageState)
  const [text, setText] = useState('')
  const onChange = (event) => { // 어떤 event 타입을 넣는게 맞을지 고민해보기!!!!!
    setText(event.target.value)
  }
  const onSearch = () => {
    // input 태그 안에 빈 값으로 검색하였을 때 => searching default value
    if (text === '') {
      setSearch('Korea')
      setPage(1)
    } else {
      setSearch(text) // 작성한 Input Value 값 할당
      setPage(1)
    }
  }
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      if (text === '') {
        // input 태그 안에 빈 값으로 검색하였을 때 => searching default value
        setSearch('Korea')
        setPage(1)
      } else {
        setSearch(text) // 작성한 Input Value 값 할당
        setPage(1)
      }
    }
  }

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBar__search}>
        <input type='text' placeholder="찾으실 이미지를 검색하세요." className={styles.searchBar__search__input} value={text} onChange={onChange} onKeyDown={handleKeyDown} />
        <img src="src/assets/icons/icon-search.svg" alt="" onClick={onSearch} />
      </div>
    </div>
  )
}

export default CommonSearchBar