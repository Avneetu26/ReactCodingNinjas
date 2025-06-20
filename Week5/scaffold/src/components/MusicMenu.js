import React, { useEffect } from 'react';

function MusicMenu({ activeItemInMenu }) {
  useEffect(() => {

    const allItems = document.querySelectorAll('#music-menu tr[data-option]');
    allItems.forEach(item => item.classList.remove('active'));
    
    const activeElement = document.querySelector(`#music-menu tr[data-option="${activeItemInMenu}"]`);
    if (activeElement) {
      activeElement.classList.add('active');
    }
  }, [activeItemInMenu]);

  return (
    <table id="music-menu">
        MusicMenu
      <tbody>
        <tr>
          <th className="table-heading">Music <i className="fas fa-music"></i></th>
        </tr>
        <tr data-option="allSongs">
          <td className="table-item">All Songs<i className="fas fa-chevron-right"></i></td> 
        </tr>
        <tr data-option="artists">
          <td className="table-item">Artists<i className="fas fa-chevron-right"></i></td>
        </tr>
        <tr data-option="albums">
          <td className="table-item">Albums<i className="fas fa-chevron-right"></i></td>
        </tr>
      </tbody>
    </table>
  );
}

export default MusicMenu;
  