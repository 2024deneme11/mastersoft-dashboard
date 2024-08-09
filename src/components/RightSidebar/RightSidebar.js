import React from 'react'
import RightSidebarHeader  from './RightSidebarHeader.js'
import './RightSidebar.css'

const RightSidebar = ({RightSidebarData,handleOpen,open}) => {
  return (      
      <div className={`sidebar ${open ? 'open' : 'closed'}`}>
          <RightSidebarHeader title='Notifications'/>
          <div onClick={handleOpen} className={`sidebarToggleButton ${open ? 'open' : 'closed'}`}></div>
          <div className='menuList'>
            {RightSidebarData.map((item=> (
              <div className="menuItem" key={item.heading}>
                <div className='icon'>{item.icon}</div>   
                <div className='title'>{item.heading}</div>
                {item.heading==='Inbox'&& <div className="msg-num">24</div>}
              </div>
            )))}
          </div>
      </div>
  )
}
export default RightSidebar


