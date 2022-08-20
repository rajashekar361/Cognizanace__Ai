import React, { Component } from 'react';
import "./chatbody.css"
import Chatlist from "../chatlist/chatlist" ;
import ChatContent from '../chatContent/ChatContent';

export default class chatbody extends Component {
  render() {
    return (
      <div className='chatbody'>
        <Chatlist/>
        <ChatContent/>
      </div>
    )
  }
}
