import React from 'react';
import './App.css';
import Screen from './components/Screen';
import Controls from './components/Controls';
import MusicMenu from './components/MusicMenu';


class App extends React.Component{


  // Handle the rotate event fired from the control component

  // If ok button is clicked,  open the selected component

  // If menu button is clicked, go back to the menu screen

  // render(){
  //   return (
  //     <></>
  //   );
  // }

  constructor(props) {
    super(props);
    this.state = {
      currentView: 'menu', // 'menu', 'coverflow', 'music', 'games', 'settings'
      activeMainItem: 'coverflow', // active item in main menu
      activeSubItem: 'allSongs', // active item in music submenu
      musicDisplay: {
        musicMenu: true,
        allSongs: false,
        artists: false,
        albums: false
      }
    };
  }

  // Handle the rotate event fired from the control component
  handleRotate = (direction) => {
    const mainMenuItems = ['coverflow', 'music', 'games', 'settings'];
    const musicMenuItems = ['allSongs', 'artists', 'albums'];

    if (this.state.currentView === 'menu') {
      const currentIndex = mainMenuItems.indexOf(this.state.activeMainItem);
      let newIndex;
      
      if (direction === 'clockwise') {
        newIndex = (currentIndex + 1) % mainMenuItems.length;
      } else {
        newIndex = currentIndex === 0 ? mainMenuItems.length - 1 : currentIndex - 1;
      }
      
      this.setState({ activeMainItem: mainMenuItems[newIndex] });
    } else if (this.state.currentView === 'music' && this.state.musicDisplay.musicMenu) {
      const currentIndex = musicMenuItems.indexOf(this.state.activeSubItem);
      let newIndex;
      
      if (direction === 'clockwise') {
        newIndex = (currentIndex + 1) % musicMenuItems.length;
      } else {
        newIndex = currentIndex === 0 ? musicMenuItems.length - 1 : currentIndex - 1;
      }
      
      this.setState({ activeSubItem: musicMenuItems[newIndex] });
    }
  };

  // If ok button is clicked, open the selected component
  handleOkClick = () => {
    if (this.state.currentView === 'menu') {
      if (this.state.activeMainItem === 'music') {
        this.setState({
          currentView: 'music',
          musicDisplay: {
            musicMenu: true,
            allSongs: false,
            artists: false,
            albums: false
          }
        });
      } else {
        this.setState({ currentView: this.state.activeMainItem });
      }
    } else if (this.state.currentView === 'music' && this.state.musicDisplay.musicMenu) {
      this.setState({
        musicDisplay: {
          musicMenu: false,
          allSongs: this.state.activeSubItem === 'allSongs',
          artists: this.state.activeSubItem === 'artists',
          albums: this.state.activeSubItem === 'albums'
        }
      });
    }
  };

  // If menu button is clicked, go back to the menu screen
  handleMenuClick = () => {
    if (this.state.currentView === 'music' && !this.state.musicDisplay.musicMenu) {
      this.setState({
        musicDisplay: {
          musicMenu: true,
          allSongs: false,
          artists: false,
          albums: false
        }
      });
    } else {
      this.setState({ currentView: 'menu' });
    }
  };

  render() {
    return (
      <>
        <Screen 
          currentView={this.state.currentView}
          activeMainItem={this.state.activeMainItem}
          activeSubItem={this.state.activeSubItem}
          musicDisplay={this.state.musicDisplay}
        />
        <Controls
          onRotate={this.handleRotate}
          onOkClick={this.handleOkClick}
          onMenuClick={this.handleMenuClick}
        />
        
        <MusicMenu/>
      </>
    );
  }

}

export default App;
