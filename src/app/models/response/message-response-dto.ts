import { Message } from "../common/message";

export interface MessageResponseDTO{ 
  data: Message[],
  isValid: boolean,
  messages: any[],
}