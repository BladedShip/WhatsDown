export const listChatRooms = `
    query GetUser($id: ID!) {
        getUser(id: $id) {
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