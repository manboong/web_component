import React from 'react';
import { MainContainer, ChatContainer, MessageList, MessageInput, Conversation, ConversationList, Avatar, Sidebar, ConversationHeader, ExpansionPanel, InfoButton, MessageSeparator, Search } from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import Message from './Message'

export const Chatuikit: React.FC = () => {
    return (
        <MainContainer
          responsive
          style={{
            height: '600px'
          }}
        >
          <Sidebar
            position="left"
          >
            <Search placeholder="Search..." />
            <ConversationList>
              <Conversation
                info="Yes i can do it for you"
                lastSenderName="Lilly"
                name="Lilly"
              >
                <Avatar
                  name="Lilly"
                  src="https://chatscope.io/storybook/react/assets/lilly-aj6lnGPk.svg"
                />
              </Conversation>
              <Conversation
                info="Yes i can do it for you"
                lastSenderName="Joe"
                name="Joe"
              >
                <Avatar
                  name="Joe"
                  src="https://chatscope.io/storybook/react/assets/joe-v8Vy3KOS.svg"
                />
              </Conversation>
              <Conversation
                info="Yes i can do it for you"
                lastSenderName="Emily"
                name="Emily"
                unreadCnt={3}
              >
                <Avatar
                  name="Emily"
                  src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
                />
              </Conversation>
              <Conversation
                info="Yes i can do it for you"
                lastSenderName="Kai"
                name="Kai"
              >
                <Avatar
                  name="Kai"
                  src="https://chatscope.io/storybook/react/assets/kai-5wHRJGb2.svg"
                />
              </Conversation>
              <Conversation
                info="Yes i can do it for you"
                lastSenderName="Akane"
                name="Akane"
              >
                <Avatar
                  name="Akane"
                  src="https://chatscope.io/storybook/react/assets/akane-MXhWvx63.svg"
                />
              </Conversation>
              <Conversation
                info="Yes i can do it for you"
                lastSenderName="Eliot"
                name="Eliot"
              >
                <Avatar
                  name="Eliot"
                  src="https://chatscope.io/storybook/react/assets/eliot-JNkqSAth.svg"
                />
              </Conversation>
              <Conversation
                active
                info="Yes i can do it for you"
                lastSenderName="Zoe"
                name="Zoe"
              >
                <Avatar
                  name="Zoe"
                  src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
                />
              </Conversation>
              <Conversation
                info="Yes i can do it for you"
                lastSenderName="Patrik"
                name="Patrik"
              >
                <Avatar
                  name="Patrik"
                  src="https://chatscope.io/storybook/react/assets/patrik-yC7svbAR.svg"
                />
              </Conversation>
            </ConversationList>
          </Sidebar>
          <ChatContainer>
            <ConversationHeader>
              <ConversationHeader.Back />
              <Avatar
                name="Zoe"
                src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
              />
              <ConversationHeader.Content
                userName="Zoe"
              />
              <ConversationHeader.Actions>
                <InfoButton />
              </ConversationHeader.Actions>
            </ConversationHeader>
            <MessageList>
              <MessageSeparator content="Saturday, 30 November 2019" />
              <Message
                model={{
                  direction: 'incoming',
                  message: 'Hello my friend',
                  position: 'single',
                  sender: 'Zoe',
                  sentTime: '15 mins ago'
                }}
              >
                <Avatar
                  name="Zoe"
                  src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
                />
              </Message>
              <Message
                model={{
                  direction: 'outgoing',
                  message: 'Hello my friend',
                  position: 'single',
                  sender: 'Patrik',
                  sentTime: '15 mins ago'
                }}
              />
              <Message
                avatarSpacer
                model={{
                  direction: 'incoming',
                  message: 'Hello my friend',
                  position: 'first',
                  sender: 'Zoe',
                  sentTime: '15 mins ago'
                }}
              />
              <Message
                avatarSpacer
                model={{
                  direction: 'incoming',
                  message: 'Hello my friend',
                  position: 'normal',
                  sender: 'Zoe',
                  sentTime: '15 mins ago'
                }}
              />
              <Message
                avatarSpacer
                model={{
                  direction: 'incoming',
                  message: 'Hello my friend',
                  position: 'normal',
                  sender: 'Zoe',
                  sentTime: '15 mins ago'
                }}
              />
              <Message
                avatarSpacer
                model={{
                  direction: 'incoming',
                  message: 'Hello my friend',
                  position: 'last',
                  sender: 'Zoe',
                  sentTime: '15 mins ago'
                }}
              >
                <Avatar
                  name="Zoe"
                  src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
                />
              </Message>
              <Message
                model={{
                  direction: 'outgoing',
                  message: 'Hello my friend',
                  position: 'first',
                  sender: 'Patrik',
                  sentTime: '15 mins ago'
                }}
               />
              <Message
                model={{
                  direction: 'outgoing',
                  message: 'Hello my friend',
                  position: 'normal',
                  sender: 'Patrik',
                  sentTime: '15 mins ago'
                }}
               />
              <Message
                model={{
                  direction: 'outgoing',
                  message: 'Hello my friend',
                  position: 'normal',
                  sender: 'Patrik',
                  sentTime: '15 mins ago'
                }}
               />
              <Message
                model={{
                  direction: 'outgoing',
                  message: 'Hello my friend',
                  position: 'last',
                  sender: 'Patrik',
                  sentTime: '15 mins ago'
                }}
               />
              <Message
                avatarSpacer
                model={{
                  direction: 'incoming',
                  message: 'Hello my friend',
                  position: 'first',
                  sender: 'Zoe',
                  sentTime: '15 mins ago'
                }}
              />
              <Message
              avatarSpacer
                model={{
                  direction: 'incoming',
                  message: 'Hello my friend',
                  position: 'last',
                  sender: 'Zoe',
                  sentTime: '15 mins ago'
                }}
              >
                <Avatar
                  name="Zoe"
                  src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
                />
              </Message>
            </MessageList>
            <MessageInput placeholder="Type message here" />
          </ChatContainer>
        </MainContainer>
    );
};
