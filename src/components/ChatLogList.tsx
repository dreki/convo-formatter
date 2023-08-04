import { ChatLogItem } from "../types/ChatLogItem";

/**
 * ChatLogListItemProps interface
 *
 * @interface ChatLogListItemProps
 */
interface ChatLogListItemProps {
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

    return (
        <div className="flex flex-row">
            {/* item.message.author.role */}
            <div className="mr-2">{item.message.author.role}</div>
            {/* item.message.content.parts, concatenated */}
            <div>
                {item.message.content.parts
                    .map((part) => {
                        return part;
                    })
                    .join("")}
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

// ChatLogList functional component
/**
 * ChatLogList functional component
 *
 * @param {ChatLogListProps} props Props
 * @return {JSX.Element} JSX
 */
function ChatLogList(props: ChatLogListProps) {
    // Destructure props
    const { items } = props;

    return (
        <div className="mt-4">
            {/* Loop over all `items`, only using ones that have a `message` */}
            {items.map((item) => {
                if (item.message) {
                    return (
                        <ChatLogListItem key={item.message.id} item={item} />
                    );
                }
            })}
        </div>
    );

    /*
                    <div className="mr-2">{item.message.id}</div>
                    <div>{item.message.content.content_type}</div>
    */
}

export default ChatLogList;
