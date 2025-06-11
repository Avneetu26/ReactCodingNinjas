import React, { useEffect } from 'react';

function SideMenu({ activeItem }) {
  // write logic for changing the selected item in the side menu
  useEffect(() => {
    // Remove active class from all items
    const allItems = document.querySelectorAll('#side-menu tr[data-option]');
    allItems.forEach(item => item.classList.remove('active'));
    
    // Add active class to current item
    const activeElement = document.querySelector(`#side-menu tr[data-option="${activeItem}"]`);
    if (activeElement) {
      activeElement.classList.add('active');
    }
  }, [activeItem]);

  return (
    <table id="side-menu">
      <tbody>
        <tr>
          <th className="table-heading">iPod <i className="fas fa-home"></i></th>
        </tr>
        <tr data-option="coverflow">
          <td className="table-item">Coverflow<i className="fas fa-chevron-right"></i></td> 
        </tr>
        <tr data-option="music">
          <td className="table-item">Music<i className="fas fa-chevron-right"></i></td>
        </tr>
        <tr data-option="games">
          <td className="table-item">Games<i className="fas fa-chevron-right"></i></td>
        </tr>
        <tr data-option="settings">
          <td className="table-item">Settings<i className="fas fa-chevron-right"></i></td>
        </tr>
      </tbody>
    </table>
  );
}

export default SideMenu;