import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideX, lucideNfc, lucideBrain, lucideGraduationCap }  from '@ng-icons/lucide';
import { NgStyle, NgFor } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.html',
  styleUrl: './cartao.css',
  // imports: [NgStyle, NgFor, NgIconComponent],
  viewProviders: [provideIcons({ lucideNfc, lucideBrain, lucideGraduationCap})]

})
export class Cartao {

  isBack = false;

  flipCard() {
    this.isBack = !this.isBack;
  }

  shareCard(): void {
  if (navigator.share) {
    navigator.share({
      title: 'Fernando H. B. Rossini',
      text: 'Sócio Diretor — Universo Comunicação e Marketing',
      url: window.location.href,
    }).catch(() => {});
  } else {
    // Fallback para desktop: copia o link
    navigator.clipboard?.writeText(window.location.href);
    alert('Link copiado!');
  }
}

saveContact(): void {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Fernando H. B. Rossini',
    'N:Rossini;Fernando;H. B.;;',
    'ORG:Universo Comunicação e Marketing',
    'TITLE:Sócio Diretor',
    'TEL;TYPE=CELL:+5511999001795',
    'URL:https://www.universoconsultoria.com.br',
    'END:VCARD'
  ].join('\n');

  const blob = new Blob([vcard], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Fernando_Rossini.vcf';
  a.click();
  URL.revokeObjectURL(url);
}

sendWhatsapp(): void {
  const msg = encodeURIComponent('Olá, Fernando! Vi seu cartão digital e gostaria de falar com você.');
  window.open(`https://wa.me/5511999001795?text=${msg}`, '_blank');
}
}
