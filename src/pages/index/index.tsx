import CommonHeader from '../../components/common/header/CommonHeader'
import CommonSearchBar from '../../components/common/searchBar/CommonSearchBar'
import CommonNav from '../../components/common/navigation/CommonNav'  
import styles from './styles/index.module.scss'

function index() {
  return (<div className={styles.page}>
    {/* 공통 헤더 UI 부분 */}
    <CommonHeader />
    {/* 공통 네비게이션 UI 부분 */}
    <CommonNav />
    <div className={styles.page__contents}>
        <div className={styles.page__contents__introBox}>
            <div className={styles.wrapper}>
                <span className={styles.wrapper__title}>PotoSplash</span>
                <span className={styles.wrapper__desc}>
                    인터넷의 시각 자료 출처입니다. <br />
                    모든 지역에 있는 크리에이터들의 지원을 받습니다. 
                </span>
                {/* 검색창 UI 부분 */}
                <CommonSearchBar />
            </div>
        </div>
        <div className={styles.page__contents__imageBox}></div>
    </div>
    {/* 공통 푸터 UI 부분 */}
  </div>)
}

export default index