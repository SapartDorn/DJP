import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY'; // Substitua pela sua chave pública do EmailJS
  private readonly SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID'; // Substitua pelo ID do seu serviço
  private readonly TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID'; // Substitua pelo ID do seu template

  constructor() {
    // Inicializar o EmailJS
    emailjs.init(this.PUBLIC_KEY);
  }

  async sendEmail(formData: {
    name: string;
    email: string;
    message: string;
  }): Promise<{ success: boolean; message: string }> {
    // Verificar se as configurações do EmailJS estão definidas
    if (this.PUBLIC_KEY === 'YOUR_EMAILJS_PUBLIC_KEY' || 
        this.SERVICE_ID === 'YOUR_EMAILJS_SERVICE_ID' || 
        this.TEMPLATE_ID === 'YOUR_EMAILJS_TEMPLATE_ID') {
      
      // Usar fallback com mailto se EmailJS não estiver configurado
      this.sendEmailFallback(formData);
      return {
        success: true,
        message: 'Abrindo seu cliente de email. Preencha e envie a mensagem.'
      };
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'djplogistica2024@gmail.com', // Email de destino
        reply_to: formData.email
      };

      const response = await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        return {
          success: true,
          message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
        };
      } else {
        return {
          success: false,
          message: 'Erro ao enviar mensagem. Tente novamente.'
        };
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      // Em caso de erro, usar fallback
      this.sendEmailFallback(formData);
      return {
        success: true,
        message: 'Erro na configuração. Abrindo seu cliente de email como alternativa.'
      };
    }
  }

  // Método alternativo usando mailto para fallback
  sendEmailFallback(formData: {
    name: string;
    email: string;
    message: string;
  }): void {
    const subject = `Contato via site - ${formData.name}`;
    const body = `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`;
    
    const mailtoUrl = `mailto:djplogistica2024@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_blank');
  }
}
