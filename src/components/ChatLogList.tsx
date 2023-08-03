import { ChatLogItem } from "../types/ChatLogItem";

interface ChatLogListProps {
    items: ChatLogItem[];
}

// ChatLogList functional component
function ChatLogList(props: ChatLogListProps) {
    // Destructure props
    const { items } = props;

    console.log(`> first item:`);
    console.log(items[0]);

    return (
        <div className="mt-4">
            {items.map((item, index) => (
                <div key={index}>
                    <div className="mr-2">{item.message?.author?.role}</div>
                </div>
            ))}
        </div>
    )

    /*
                    <div className="mr-2">{item.message.id}</div>
                    <div>{item.message.content.content_type}</div>
    */
}

export default ChatLogList;
