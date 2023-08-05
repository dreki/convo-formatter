import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { ChatLogItem } from "../types/ChatLogItem";

// enum Role {
//     USER = "user",
//     ASSISTANT = "assistant",
// }

/**
 * ChatLogListItemProps interface
 *
 * @interface ChatLogListItemProps
 */
interface ChatLogListItemProps {
    // role: Role;
    // message: string;
    item: ChatLogItem;
}

/**
 * ChatLogListItem functional component
 *
 * @param {ChatLogListItemProps} props Props
 * @return {JSX.Element} JSX
 */
function ChatLogListItem(props: ChatLogListItemProps) {
    // Destructure props
    const { item } = props;

    const startOrEnd =
        item.message.author.role === "user" ? "chat-end" : "chat-start";
    const bubblePrimaryOrSecondary =
        item.message.author.role === "user"
            ? "chat-bubble-secondary"
            : "chat-bubble-primary";

    const itemPartsConcatenated: string = item.message.content.parts
        .map((part) => {
            return part;
        })
        .join("");

    return (
        <div className={`chat ${startOrEnd}`}>
            <div className="chat-header">{item.message.author.role}</div>
            <div className={`chat-bubble ${bubblePrimaryOrSecondary}`}>
                <ReactMarkdown>{itemPartsConcatenated}</ReactMarkdown>
            </div>
        </div>
    );
}

/**
 * ChatLogListProps interface
 *
 * @interface ChatLogListProps
 */
interface ChatLogListProps {
    items: ChatLogItem[];
}

/**
 * ChatLogList functional component
 *
 * @param {ChatLogListProps} props Props
 * @return {JSX.Element} JSX
 */
function ChatLogList(props: ChatLogListProps) {
    // Destructure props
    const { items } = props;

    // Only use `items` that have a `message` and `item.message.author.role` isn't "system"
    const itemsWithMessageAndNotSystem = items.filter((item) => {
        if (item.message && item.message.author.role !== "system") {
            return true;
        }
        return false;
    });

    return (
        // <div className="mt-4">
        <div className="mt-4 w-full">
            <div className="chat chat-start">
                <div className="chat-header">system</div>
                <div className="chat-bubble">
                    Start of conversation with assistant
                </div>
            </div>
            {itemsWithMessageAndNotSystem.map((item) => {
                return <ChatLogListItem key={item.message.id} item={item} />;
            })}
        </div>
    );

    /*
                    <div className="mr-2">{item.message.id}</div>
                    <div>{item.message.content.content_type}</div>
    */
}

export default ChatLogList;
