/**
 * This represents the shape of a single chat log item.
 */
export class ChatLogItem {
    id!: string;
    // `message` is an object, with an `id`, etc.
    message!: {
        id: string;
        author: {
            role: string;
            name: string | null;
            metadata: {};
        };
        create_time: number;
        update_time: number | null;
        content: {
            content_type: string;
            // `parts` is an array of strings
            parts: string[];
        };
        status: string;
        end_turn: boolean | null;
        weight: number;
        metadata: {
            message_type: any | null;
        };
        recipient: string;
    };

    /**
     * Class function to convert an object with keys that are IDs, mapped to objects that can be
     * cast as ChatLogItems, into an array of ChatLogItems.
     *
     * @param obj An object with keys that are IDs, mapped to objects that can be cast as ChatLogItems.
     * @returns An array of ChatLogItems.
     */
    static fromObject(obj: { [key: string]: any }): ChatLogItem[] {
        const items: ChatLogItem[] = [];
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const item = obj[key] as ChatLogItem;
                item.id = key;
                items.push(item);
            }
        }
        return items;
    }
}
