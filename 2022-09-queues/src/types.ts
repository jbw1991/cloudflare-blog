// These types will eventually be available in the workers-types package

// Types for the producer binding
export interface Queue<Body = any> {
  send(message: Body, options?: MessageSendOptions): Promise<void>;
  sendBatch(batch: Iterable<MessageSendRequest<Body>>): Promise<void>;
}

export type MessageSendRequest<Body = any> = {
  body: Body;
} & MessageSendOptions;

export type MessageSendOptions = {
  // Reserved
};

// Types for messages + batches received by the consumer
export interface Message<Body = any> {
  readonly id: string;
  readonly timestamp: Date;
  readonly body: Body;
  retry(): void;
}

export interface MessageBatch<Body = any> {
  readonly queue: string;
  readonly messages: Message<Body>[];
  retryAll(): void;
}