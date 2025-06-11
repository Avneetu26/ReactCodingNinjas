import React from 'react';
import './css/screen.css';
import SideMenu from './SideMenu';
import Coverflow from './Coverflow';
import Music from './Music';
import Games from './Games';
import Settings from './Settings';

class Screen extends React.Component {
  // Display the sidemenu, coverflow, games, Music etc here
  render() {
    const { currentView, activeMainItem, activeSubItem, musicDisplay } = this.props;

    const renderContent = () => {
      switch(currentView) {
        case 'menu':
          return <SideMenu activeItem={activeMainItem} />;
        case 'coverflow':
          return <Coverflow />;
        case 'music':
          return <Music display={musicDisplay} activeItemInMenu={activeSubItem} />;
        case 'games':
          return <Games />;
        case 'settings':
          return <Settings />;
        default:
          return <SideMenu activeItem={activeMainItem} />;
      }
    };

    return (
      <>
        {renderContent()}
      </>
    );
  }
}

export default Screen;