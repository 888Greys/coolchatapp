import React, {useState, useEffect, useContext} from "react";

import { Context } from "../context";

import { useRouter } from "next/router";

import dynamic from "next/dynamic";
import { MessageFormSocial } from "react-chat-engine";

const ChatEngine = dynamic(() => 
  import("react-chat-engine").then((module) => module.ChatEngine));

export default function Chats() {
  const {username, secret} = useContext(Context)
  const [showchat, setShowchat] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (typeof document !== null) {
      setShowchat(true)
    }
  })

  useEffect(() =>{
    if (username.length === 0 || secret.length === 0) 
      router.push('/')
  })

  if (!showchat) return <div />

  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine
          height='calc(100vh - 200px)'
          projectID='555a9f9b-8e6d-4d91-9b9e-54bf16021757'
          userName={username}
          userSecret={secret}
          renderMessageForm={() => <MessageFormSocial/>}
        />
      </div>
    </div>
  )
}