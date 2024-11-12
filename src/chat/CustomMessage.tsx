import React, { ReactNode } from 'react';
import { Message } from '@chatscope/chat-ui-kit-react';

interface CustomMessageProps {
  avatarSpacer?: boolean;
  unreadCount: number;
  model: {
    direction: 'incoming' | 'outgoing';
    message: string;
    position: 'normal' | 'single' | 'first' | 'last';
    sender?: string;
    sentTime?: string;
  };
  children?: ReactNode;
}

const CustomMessage: React.FC<CustomMessageProps> = ({ avatarSpacer, unreadCount, model, children }) => {
  const isIncoming = model.direction === 'incoming';

  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>

      {unreadCount > 0 && (
        <span
          style={{
            position: 'absolute',
            fontSize: '0.75rem',
            color: '#fff',
            backgroundColor: '#f44336',
            borderRadius: '50%',
            padding: '2px 6px',
            top: '-5px',
            [isIncoming ? 'right' : 'left']: '-10px',
          }}
        >
          {unreadCount}
        </span>
      )}

      <Message avatarSpacer={avatarSpacer} model={model} />
      
      {children}
    </div>
  );
};

export default CustomMessage;
