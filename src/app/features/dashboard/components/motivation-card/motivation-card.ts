import { Component, computed } from '@angular/core';
import { CardComponent } from "../../../../shared/components/card/card.component";

@Component({
  selector: 'app-motivation-card',
  standalone: true,
  templateUrl: './motivation-card.html',
  styleUrl: './motivation-card.css',
  imports: [CardComponent]
})
export class MotivationCardComponent {

  private readonly messages = [

    {
      title: '💚 Você está indo muito bem!',
      description:
        'Cada tarefa concluída ajuda na organização do seu dia.'
    },

    {
      title: '🌞 Um passo de cada vez',
      description:
        'Não tenha pressa. Faça uma atividade por vez.'
    },

    {
      title: '⭐ Continue assim!',
      description:
        'Organizar sua rotina pode tornar o dia mais tranquilo.'
    },

    {
      title: '😊 Conte conosco',
      description:
        'Sempre que precisar, volte ao painel para acompanhar suas atividades.'
    }

  ];

  readonly message = computed(() => {

    const day = new Date().getDate();

    return this.messages[
      day % this.messages.length
    ];

  });

}
