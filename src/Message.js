import { Card, CardContent, Typography } from '@material-ui/core'
import React, { forwardRef } from 'react'
import './Message.css';

const Message = forwardRef(({ message, username }, ref) => {

    const isUser = username === message.username;

    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <p>{!isUser && `${message.username || 'Unknown User'}`}</p>
            <Card className={isUser ? "message__userCard" : "message_guestCard"}>
                <CardContent>   
                    <Typography className={isUser ? "user__typography" : "guest_typography"} color="white" variant="h5" component="h2">                    
                         {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message
