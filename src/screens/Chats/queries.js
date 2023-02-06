export const listChatRooms = `
    query MyQuery{
        getUser(id:"ff17fac6-70b3-4b63-b2a0-8feaa39ef509"){
            id
            ChatRooms{
                items{
                    chatRoom{
                        id
                        users{
                            items{
                                user{
                                    id
                                    image
                                    name
                                }
                            }
                        }
                        LastMessage{
                            id
                            createdAt
                        }
                    }
                }
            }
        }
    }
`;