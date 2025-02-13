import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-chatbot',
  imports: [],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line to allow custom elements
})
export class ChatbotComponent {}
