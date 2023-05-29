import React from 'react';
import Conversation from './Conversation';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-block">
        <h3>Assunto 1</h3>
        <Conversation />
      </div>
      <div className="sidebar-block">
        <h3>Assunto 2</h3>
        {/* Componente ou conteúdo para o Assunto 2 */}
      </div>
    </div>
  );
}

export default Sidebar;
