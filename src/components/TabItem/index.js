import './index.css'

const TabItem = props => {
  const {tabDetails, selectTab, isActive} = props
  const {displayText, tabId} = tabDetails
  const styling = isActive ? 'active-tab btn' : 'btn'

  const onClickTab = () => {
    selectTab(tabId)
  }

  return (
    <li className="list-item">
      <button onClick={onClickTab} className={styling} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
