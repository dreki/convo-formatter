/**
 * This represents the shape of a single chat log item.
 */
export interface ChatLogItem {
    id: string;
    // `message` is an object, with an `id`, etc.
    message: {
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
}
