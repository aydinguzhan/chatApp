export const chatList = [
    {
        id: 1,
        userName: "Güler",
        lastMessage: "Deneme metinidir. Bu çok harfli bir metindir",
        date: "27/10/2024",
        isView: true,
        imageSource: "../assets/images/react-logo.png"
    },
    {
        id: 2,
        userName: "Ahmet",
        lastMessage: "Merhaba, nasılsınız? Uzun zamandır görüşemedik.",
        date: "26/10/2024",
        isView: false,
        imageSource: "../assets/images/react-logo.png"

    },
    {
        id: 4,
        userName: "Ali",
        lastMessage: "Bana geri dönüş yapabilir misin? Önemli bir konu var.",
        date: "24/10/2024",
        isView: false,
        imageSource: "../assets/images/react-logo.png"

    },
    {
        id: 5,
        userName: "Topuş",
        lastMessage: "Dün akşamki etkinlik çok güzeldi, tekrar buluşalım!",
        date: "23/10/2024",
        isView: true,
        imageSource: "../assets/images/react-logo.png"

    }

];

export const chats = [
    {
        chatId: 1,
        participants: [3, 2],
        messages: [
            { messageId: "1", senderId: "3", text: "Hello, Bob!", timestamp: "2024-11-30T10:00:00Z" },
            { messageId: "2", senderId: "2", text: "Hi, Alice!", timestamp: "2024-11-30T10:01:00Z" },
            { messageId: "3", senderId: "3", text: "How are you?", timestamp: "2024-11-30T10:02:00Z" }
        ]
    },
    {
        chatId: 2,
        participants: [3, 1],
        messages: [
            { messageId: "1", senderId: "1", text: "Hey Charlie, what's up?", timestamp: "2024-11-30T10:10:00Z" },
            { messageId: "2", senderId: "3", text: "Not much, Alice. How about you?", timestamp: "2024-11-30T10:11:00Z" },
            { messageId: "3", senderId: "1", text: "Just working on a project. You?", timestamp: "2024-11-30T10:12:00Z" }
        ]
    },
    {
        chatId: 3,
        participants: [3, 4],
        messages: [
            { messageId: "1", senderId: "3", text: "Hey David, any plans for the weekend?", timestamp: "2024-11-30T10:20:00Z" },
            { messageId: "2", senderId: "5", text: "Not sure yet. Maybe I'll go hiking.", timestamp: "2024-11-30T10:21:00Z" },
            { messageId: "3", senderId: "3", text: "That sounds great! Let me know.", timestamp: "2024-11-30T10:22:00Z" }
        ]
    },
    {
        chatId: 4,
        participants: [3, 4],
        messages: [
            { messageId: "1", senderId: "3", text: "Hi David, are you coming to the meeting?", timestamp: "2024-11-30T10:30:00Z" },
            { messageId: "2", senderId: "4", text: "Yes, I'll be there. Just finishing some work.", timestamp: "2024-11-30T10:31:00Z" },
            { messageId: "3", senderId: "3", text: "Alright, see you soon!", timestamp: "2024-11-30T10:32:00Z" }
        ]
    },
    {
        chatId: 5,
        participants: [3, 5],
        messages: [
            { messageId: "1", senderId: "3", text: "Hi David, are you coming to the meeting?", timestamp: "2024-11-30T10:30:00Z" },
            { messageId: "2", senderId: "5", text: "Yes, I'll be there. Just finishing some work.", timestamp: "2024-11-30T10:31:00Z" },
            { messageId: "3", senderId: "3", text: "Alright, see you soon!", timestamp: "2024-11-30T10:32:00Z" }
        ]
    }
];
